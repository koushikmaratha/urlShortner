-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 05, 2020 at 07:44 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BWAeXrGPhN`
--

-- --------------------------------------------------------

--
-- Table structure for table `short_urls`
--

CREATE TABLE `short_urls` (
  `id` int(11) NOT NULL,
  `long_url` text COLLATE utf8_unicode_ci NOT NULL,
  `short_url` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `short_urls`
--

INSERT INTO `short_urls` (`id`, `long_url`, `short_url`) VALUES
(18, 'http://www.google.in', 'orQmZr'),
(19, 'http://www.checkit.com', 'CdtqVp'),
(20, 'http://www.checkit2.com', 'rLHjUD'),
(21, 'https://www.kaburlu.net', 'WDPFwh'),
(22, 'https://www.gmail.com', 'gVYUrz'),
(23, 'http://www.youtube.com', 'LTIaSi');

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` int(11) NOT NULL,
  `short_urls_id` int(11) NOT NULL,
  `ip_address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `stats`
--

INSERT INTO `stats` (`id`, `short_urls_id`, `ip_address`, `country`) VALUES
(10, 20, '127.0.0.1', NULL),
(11, 21, '127.0.0.1', NULL),
(12, 22, '127.0.0.1', NULL),
(13, 22, '127.0.0.1', NULL),
(14, 23, '127.0.0.1', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `short_urls`
--
ALTER TABLE `short_urls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `short_urls_id` (`short_urls_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `short_urls`
--
ALTER TABLE `short_urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stats`
--
ALTER TABLE `stats`
  ADD CONSTRAINT `stats_ibfk_1` FOREIGN KEY (`short_urls_id`) REFERENCES `short_urls` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
