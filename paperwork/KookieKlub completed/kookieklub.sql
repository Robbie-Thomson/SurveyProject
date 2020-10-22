-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2015 at 06:15 PM
-- Server version: 5.6.15-log
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kookieklub`
--

-- --------------------------------------------------------

--
-- Table structure for table `kookies`
--

CREATE TABLE IF NOT EXISTS `kookies` (
  `KookieID` int(2) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Classification` varchar(10) NOT NULL,
  `Chocolate` varchar(3) NOT NULL,
  PRIMARY KEY (`KookieID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `kookies`
--

INSERT INTO `kookies` (`KookieID`, `Name`, `Classification`, `Chocolate`) VALUES
(1, 'Chocolate Chip', 'Unwrapped', 'Yes'),
(2, 'Abernethy', 'Plain', 'No'),
(3, 'Bath Oliver', 'Savoury', 'No'),
(4, 'Bourbon', 'Boring', 'Yes'),
(5, 'Marshmallow Teacake', 'Wrapped', 'Yes'),
(6, 'Cream Cracker', 'Savoury', 'No'),
(7, 'Custard Cream', 'Boring', 'No'),
(8, 'Digestive Biscuit', 'Plain', 'No'),
(9, 'Empire Biscuit', 'Iced', 'No'),
(10, 'Garibaldi Biscuit', 'Plain', 'No'),
(11, 'Gingerbread Man', 'Iced', 'No'),
(12, 'Jammie Dodgers', 'Plain', 'No'),
(13, 'Chocolate Finger', 'Unwrapped', 'Yes'),
(14, 'Nice Biscuit', 'Plain', 'No'),
(15, 'Oatmeal Biscuit', 'Unwrapped', 'No'),
(16, 'Oreo', 'Unwrapped', 'Yes'),
(17, 'Party Ring', 'Iced', 'No'),
(18, 'Rich Tea', 'Boring', 'No'),
(19, 'Shortbread', 'Plain', 'No'),
(20, 'Penguin', 'Wrapped', 'Yes'),
(21, 'Breakaway', 'Wrapped', 'Yes'),
(22, 'Jaffa Cake', 'Unwrapped', 'Yes'),
(23, 'Time Out', 'Wrapped', 'Yes'),
(24, 'Chocolate Digestive', 'Unwrapped', 'Yes'),
(25, 'Water Biscuit', 'Savoury', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `MemberID` int(3) NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(20) NOT NULL,
  `Surname` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Town` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Favourite` varchar(29) NOT NULL,
  PRIMARY KEY (`MemberID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`MemberID`, `Firstname`, `Surname`, `Email`, `Town`, `Password`, `Favourite`) VALUES
(7, 'James', 'Bond', 'jbond007@hotmail.com', 'London', 'Password007', 'Time Out');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
