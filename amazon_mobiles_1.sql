-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2023 at 08:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amazon_mobiles`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `mobileNumber` varchar(50) NOT NULL,
  `area` varchar(50) NOT NULL,
  `landmark` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `pincode` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `country_id`, `name`, `mobileNumber`, `area`, `landmark`, `address`, `pincode`, `city`, `state`, `user_id`) VALUES
(1, 1, 'Pratik', '9766600939', 'H.no 1277 Model Town ', 'Bezonbagh', 'Near Laal school', 440014, 'Nagpur', 'Maharashtra', 13),
(2, 1, 'Nicky', '9766600939', 'H.no 1277 Model Town', 'Bezonbagh', 'Near Laal school', 440014, 'Nagpur', 'Maharashtra', 13),
(3, 1, 'Saurabh', '7661945890', 'H.no 76544  Model Town', 'Bezonbagh', 'Bezonbagh', 440014, 'Nagpur', 'Maharashtra', 13);

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_name`) VALUES
(1, 'Apple'),
(2, 'samsung');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `image_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `quantity`, `product_name`, `price`, `image_url`) VALUES
(1, 1, 3, 1, 'Apple iPhone 14', 65999, 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg'),
(2, 1, 2, 1, 'Apple iPhone 13', 55999, 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `country_master`
--

CREATE TABLE `country_master` (
  `id` int(11) NOT NULL,
  `country_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `country_master`
--

INSERT INTO `country_master` (`id`, `country_name`) VALUES
(1, 'India');

-- --------------------------------------------------------

--
-- Table structure for table `products_seller_info`
--

CREATE TABLE `products_seller_info` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `specifications` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `image_path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_seller_info`
--

INSERT INTO `products_seller_info` (`product_id`, `product_name`, `brand_id`, `seller_id`, `price`, `specifications`, `date`, `image_path`) VALUES
(1, 'Apple iPhone 12', 1, 1, 48990, '6.1-inch (15.5 cm diagonal) Super Retina XDR display\r\nCeramic Shield, tougher than any smartphone glass\r\nA14 Bionic chip, the fastest chip ever in a smartphone\r\nAdvanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording\r\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\r\nIndustry-leading IP68 water resistance\r\nSupports MagSafe accessories for easy attach and faster wireless charging\r\niOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more', '2023-09-14 13:49:16', 'https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg'),
(2, 'Apple iPhone 13', 1, 1, 55999, '15 cm (6.1-inch) Super Retina XDR display\r\nCinematic mode adds shallow depth of field and shifts focus automatically in your videos\r\nAdvanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording\r\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\r\nA15 Bionic chip for lightning-fast performance', '2023-09-14 13:51:51', 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg'),
(3, 'Apple iPhone 14', 1, 1, 65999, '15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can’t All-day battery life and up to 20 hours of video playback Industry-leading durability features with Ceramic Shield and water resistance', '2023-09-14 14:27:11', 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg'),
(4, 'Apple iPhone 14 Plus', 1, 1, 76990, '16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can’t All-day battery life and up to 26 hours of video playback Industry-leading durability features with Ceramic Shield and water resistance', '2023-09-14 14:37:39', 'https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg'),
(5, 'Samsung Galaxy S23 5G', 2, 2, 74999, 'More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightographys enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again. Designed with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film. Power for those who dont pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.', '2023-09-14 14:42:07', 'https://m.media-amazon.com/images/I/61RZDb2mQxL._SX679_.jpg'),
(6, 'Samsung Galaxy S23 5G', 1, 1, 74999, 'More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightographys enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again. Designed with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film. Power for those who dont pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.', '2023-09-14 14:47:25', 'https://m.media-amazon.com/images/I/61RW5RGJeCL._SX679_.jpg'),
(7, 'Samsung Galaxy S23 Ultra 5G', 2, 1, 103580, 'CAPTURE THE NIGHT IN LOW LIGHT: Whether youre headed to a concert or romantic night out, theres no such thing as bad lighting with Night Mode; Galaxy S23 Ultra lets you capture epic content in any setting with stunning Nightography HIGHEST PHONE CAMERA RESOLUTION: Create crystal-clear content worth sharing with Galaxy S23 Ultras 200MP camera — the highest camera resolution on a phone; Whether youre posting or printing, Galaxy S23 Ultra always does the moment justice STUNNINGLY SMOOTH VIDEO: Capture incredibly smooth video during lifes most exciting moments; With Video Stabilization, this smartphone easily records daytime outdoor adventures or those spur-of-the-moment dance parties at night WRITE, DRAW, CREATE w/ S PEN: Whether youre in Samsung Note, Microsoft Office or Google Suite, with the built-in S Pen, you can convert handwriting to text, share your creations live and keep everything on your Galaxy S23 Ultra device SNAP PICS w/ S PEN: Capture epic selfies and beautiful photos with the click of your S Pen; Simply open up the camera app and click the button on the S Pen instead of the screen; Getting that great shot just got easier', '2023-09-14 14:50:24', 'https://m.media-amazon.com/images/I/51noqYKjciL._SX679_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_info`
--

CREATE TABLE `product_info` (
  `pro_id` int(11) NOT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  `product_specification` varchar(100) DEFAULT NULL,
  `product_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seller_details`
--

CREATE TABLE `seller_details` (
  `seller_id` int(11) NOT NULL,
  `seller_name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller_details`
--

INSERT INTO `seller_details` (`seller_id`, `seller_name`, `email`, `mobile`, `password`, `address`, `date`) VALUES
(1, 'himanshu', 'manchu@gmail.com', '9307887466', '123', 'jaripatka', '2023-09-14 00:17:56'),
(2, 'tinku', 'tinku@gmail.com', '9307887466', '123', 'sadar', '2023-09-14 00:17:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_number` varchar(10) NOT NULL,
  `password` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `updation_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile_number`, `password`, `creation_date`, `updation_date`) VALUES
(12, 'saurabh', 'saurabhkillsiw@gail.com', '1245', 'gta', '2023-09-13 21:18:24', '2023-09-13 21:18:24'),
(13, 'pratik', 'pratikr500@gmail.com', '9766600939', '123', '2023-09-13 23:28:28', '2023-09-13 23:28:28'),
(14, 'saurabh', 'saurabh@gmail.com', '7661945890', '123', '2023-09-14 12:57:05', '2023-09-14 12:57:05');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `user_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `mobile_number` int(11) NOT NULL,
  `email_id` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `creation_date` datetime DEFAULT current_timestamp(),
  `updation_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country_master`
--
ALTER TABLE `country_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_seller_info`
--
ALTER TABLE `products_seller_info`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_info`
--
ALTER TABLE `product_info`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `seller_details`
--
ALTER TABLE `seller_details`
  ADD PRIMARY KEY (`seller_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `country_master`
--
ALTER TABLE `country_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products_seller_info`
--
ALTER TABLE `products_seller_info`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product_info`
--
ALTER TABLE `product_info`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller_details`
--
ALTER TABLE `seller_details`
  MODIFY `seller_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user_login`
--
ALTER TABLE `user_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
