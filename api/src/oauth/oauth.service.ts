import { Injectable, Inject } from '@nestjs/common';
import { Repository, RepositoryNotTreeError } from 'typeorm';
import { Oauth } from './oauth.entity';
import { cca } from './oauth.dto';

@Injectable()
export class OauthService {
    constructor(
        @Inject('OAUTH_REPOSITORY')
        private oauthRepository: Repository<Oauth>,
    ) {}

    async loginService(req, res) {
        const authCodeUrlParameters = {
            scopes: ["user.read"],
            redirectUri: "http://localhost:8081/oauth/connection/redirect",
        };

        // get url to sign user in and consent to scopes needed for application
        cca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
            res.redirect(response);
        }).catch((error) => console.log(JSON.stringify(error)));
    }

    async redirection(req, res) {
        const tokenRequest = {
            code: req.query.code,
            scopes: ["user.read"],
            redirectUri: "http://localhost:8081/oauth/connection/redirect",
        };

        cca.acquireTokenByCode(tokenRequest).then((response) => {
            console.log("\nResponse: \n:", response);
            res.sendStatus(200);
            this.addService({
                id: null,
                fk_user_id: 4,
                type: 1,
                refresh_token: response.accessToken,
                token: response.idToken,
                expires_at: response.expiresOn
            });
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    }

    async addService(oauth : Oauth): Promise<Oauth> {
        return this.oauthRepository.save(oauth);
    }

    async getUserServiceToken(userId : Number, serviceId : Number): Promise<Oauth> {
        return this.oauthRepository.findOne({ where: { fk_user_id: userId, type: serviceId } });
    }
}
