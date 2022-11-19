CREATE TABLE `user_money_history` (
  `user_money_history_id` int NOT NULL,
  `user_id` int NOT NULL,
  `after_number` int NOT NULL,
  `use_number` int NOT NULL,
  `before_number` int NOT NULL,
  `type` int NOT NULL,
  `status` int NOT NULL,
  `delete_mark` int NOT NULL DEFAULT '0',
  `end_timestamp` timestamp NULL DEFAULT NULL,
  `create_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modify_timestamp` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


ALTER TABLE `user_money_history`
  ADD PRIMARY KEY (`user_money_history_id`),
  ADD KEY (`user_id`);


ALTER TABLE `user_money_history`
  ADD CONSTRAINT `user_money_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);