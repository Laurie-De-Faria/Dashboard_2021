CREATE DATABASE IF NOT EXIST dashboard;

USE dashboard;

CREATE TABLE IF NOT EXIST `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `mail` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `username`, `mail`, `password`) VALUES
(0, 'jim-moriarty', 'jim.moriarty@sherlock.eu', 'MissMe?'),
(1, 'sherlock', 'sherlock@gmail.com', 'John');

CREATE TABLE IF NOT EXIST `oauth` (
  `fk_user_id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `refresh_token` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expires_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXIST `services` (
  `id` int(11) NOT NULL,
  `fk_user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `widget_id` int(11) NOT NULL,
  `is_active` BIT,
  `data` JSON
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `oauth`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `oauth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

COMMIT;