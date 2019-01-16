-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2018 at 10:07 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linkedin2`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `user_from_id` int(11) DEFAULT NULL,
  `user_to_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `contenu` longtext NOT NULL,
  `date` datetime DEFAULT NULL,
  `publication` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commentaire`
--

INSERT INTO `commentaire` (`id`, `contenu`, `date`, `publication`, `id_utilisateur`) VALUES
(6, 'Intrested !', '2018-12-23 21:14:57', 46, 4),
(81, 'ofc 8)', '2018-12-23 21:15:41', 72, 3);

-- --------------------------------------------------------

--
-- Table structure for table `competence`
--

CREATE TABLE `competence` (
  `id` int(11) NOT NULL,
  `nom_competence` varchar(10000) DEFAULT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `competence`
--

INSERT INTO `competence` (`id`, `nom_competence`, `id_utilisateur`) VALUES
(1, 'Space', 1),
(2, 'Facebook', 2),
(3, 'Python', 3),
(4, 'React', 3),
(5, 'JS', 3),
(6, 'Java', 4),
(7, 'Python', 5),
(8, 'R', 6),
(9, 'C++', 7),
(10, 'MS', 8),
(11, 'JAVA', 7),
(12, 'Python', 6);

-- --------------------------------------------------------

--
-- Table structure for table `connexion`
--

CREATE TABLE `connexion` (
  `id` int(11) NOT NULL,
  `ajout` int(11) DEFAULT NULL,
  `id_utilisateur1` int(11) NOT NULL,
  `id_utilisateur2` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `connexion`
--

INSERT INTO `connexion` (`id`, `ajout`, `id_utilisateur1`, `id_utilisateur2`) VALUES
(1, 1, 3, 1),
(2, 1, 3, 2),
(3, 1, 3, 4),
(4, 1, 3, 5),
(5, 1, 3, 6),
(6, 1, 3, 7),
(16, 1, 3, 8),
(8, 1, 2, 4),
(10, 1, 1, 2),
(11, 1, 4, 5),
(12, 1, 5, 6),
(13, 1, 4, 6),
(14, 1, 6, 7),
(15, 1, 7, 8);

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `cause` varchar(1000) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `description` varchar(10000) NOT NULL,
  `role` varchar(1000) NOT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `cause`, `date_debut`, `date_fin`, `description`, `role`, `id_utilisateur`) VALUES
(1, 'SpaceX', '2008-01-03', '2100-01-03', 'SpaceX Founder', 'CEO', 1),
(2, 'Facebook', '2004-01-03', '2100-01-03', 'FaceBook Founder', 'CEO', 2),
(3, 'C++ Developer', '2017-12-25', '2018-12-17', 'Big Data Big App :v', 'Developer', 3),
(4, 'Java Developer', '2018-12-01', '2019-01-31', 'Make A linkedin Website', 'Developer', 3),
(5, 'Data science Expert', '2018-12-04', '2018-12-21', 'Make Machine learning model', 'Data science', 4),
(6, 'Android Developer', '2018-09-04', '2018-12-05', 'Make an Android App', 'Developer', 5),
(7, 'Web developer', '2018-12-11', '2018-12-25', 'E-commerce Website', 'Developer', 6);

-- --------------------------------------------------------

--
-- Table structure for table `formation`
--

CREATE TABLE `formation` (
  `id` int(11) NOT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `diplome` varchar(1000) DEFAULT NULL,
  `discipline` varchar(1000) DEFAULT NULL,
  `ecole` varchar(1000) DEFAULT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formation`
--

INSERT INTO `formation` (`id`, `date_debut`, `date_fin`, `description`, `diplome`, `discipline`, `ecole`, `id_utilisateur`) VALUES
(1, '2001-12-04', '2003-12-04', 'Computer science', 'MBI', 'IT & MBI', 'Harverd', 1),
(2, '2001-12-04', '2003-12-04', 'Computer science', 'MBI', 'IT & MBI', 'Harverd', 2),
(3, '2016-12-04', '2018-12-04', 'Computer science', 'ISAMM', 'Multimedia', 'ISAMM', 3),
(4, '2016-12-04', '2018-12-04', 'Computer science', 'ISAMM', 'Multimedia', 'ISAMM', 4),
(5, '2016-12-04', '2018-12-04', 'Computer science', 'ISAMM', 'Multimedia', 'ISAMM', 5),
(6, '2016-12-04', '2018-12-04', 'Computer science', 'ISAMM', 'Multimedia', 'ISAMM', 6),
(7, '2016-12-04', '2018-12-04', 'Computer science', 'ISAMM', 'Multimedia', 'ISAMM', 7),
(8, '1994-12-04', '2000-12-04', 'Computer science', 'Bashlors', 'IT', 'MIT', 8),
(9, '2013-12-04', '2016-12-04', 'Computer science', 'CS', 'Software', 'ISIMM', 3);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1),
(1),
(1),
(1);

-- --------------------------------------------------------

--
-- Table structure for table `j_aime`
--

CREATE TABLE `j_aime` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `publication` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `langue`
--

CREATE TABLE `langue` (
  `id` int(11) NOT NULL,
  `lang` varchar(50) NOT NULL,
  `niveau` varchar(50) NOT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `contenu_tx` varchar(200) NOT NULL,
  `id_destinataire` int(11) NOT NULL,
  `id_envoyeur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `lien` varchar(200) NOT NULL,
  `objet` varchar(300) NOT NULL,
  `id_recepteur` int(11) NOT NULL,
  `id_envoi` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `date`, `lien`, `objet`, `id_recepteur`, `id_envoi`) VALUES
(1, '2018-12-17 00:00:00', '#', 'Ali and 9 others liked your post', 2, 1),
(2, '2018-12-18 00:00:00', '#', 'We found jobs at URBAN LINKER and 4 others that you may be interested in', 3, 3),
(3, '2018-12-22 00:00:00', '#', 'We found jobs at URBAN LINKER and 4 others that you may be interested in', 2, 2),
(4, '2018-12-24 00:00:00', '#', '\r\n1 person viewed your profile: Stay anonymous and see who\'s viewed your profile with Premium', 4, 3),
(5, '2018-12-25 00:00:00', '#', '\r\n1 person viewed your profile: Stay anonymous and see who\'s viewed your profile with Premium', 2, 1),
(6, '2018-12-25 00:00:00', '#', '1 company you follow just posted 1 new job', 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `offre_emploi`
--

CREATE TABLE `offre_emploi` (
  `id` int(11) NOT NULL,
  `desc_offre` varchar(10000) NOT NULL,
  `hashtag1` varchar(1000) DEFAULT NULL,
  `hashtag2` varchar(1000) DEFAULT NULL,
  `hashtag3` varchar(1000) DEFAULT NULL,
  `nom_offre` varchar(100) NOT NULL,
  `id_recruteur` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `place` varchar(1000) DEFAULT NULL,
  `price` varchar(1000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offre_emploi`
--

INSERT INTO `offre_emploi` (`id`, `desc_offre`, `hashtag1`, `hashtag2`, `hashtag3`, `nom_offre`, `id_recruteur`, `date`, `place`, `price`) VALUES
(1, 'One of the world’s leading food companies, General Mills operates in more than 100 countries and markets more than 100 consumer brands, including Cheerios, Häagen-Dazs, Nature Valley, Betty Crocker, Pillsbury, Green Giant, Old El Paso, Yoplait and more.', 'JAVA', 'J2EE', 'ANGULAR', 'Brand Marketing Internship (6-months)/International Development Program', 5, '2018-12-23 00:00:00', 'Sousse', '20'),
(2, 'As Marketing & Communication Assistant, you will be based in Paris and will actively participate in the various actions aimed at developing Teads visibility and notoriety on the French market, under the responsibility of the Head of Marketing & Communication France.', 'MArkiting', 'Eng', 'FR', 'Marketing & Communication Assistant ', 5, '2018-12-23 00:00:00', 'TN', '20'),
(3, 'Be part of SpaceX Wee need you :', 'Space', 'Stars', 'Rocket', 'Astronaut for Hire !', 1, '2018-12-18 00:00:00', 'Mars', '3000'),
(4, 'Nous recherchons un ingénieur pour accompagner la réalisation de nos projets de recherche sur le thème des objets connectés, l’analyse de données (Big Data) et l’apprentissage machine dans l’environnement des bâtiments intelligents et connectés.', 'Python', 'R', 'Bigdata', 'Ingénieur Machine Learning/Data Scientist', 6, '2018-12-11 00:00:00', 'France', '100'),
(5, 'At Liftoff, we’re solving one of the core problems faced by every mobile app: growth. To do so, we build Machine Learning models and infrastructure that can accurately predict which apps a user will like and how to connect them in a compelling way. Our systems operate at a scale unseen outside of the largest Internet companies ', 'Python', 'CNN', 'R', 'Machine Learning Engineer', 4, '2018-12-19 00:00:00', 'Tunis', '60');

-- --------------------------------------------------------

--
-- Table structure for table `offre_emploi_offre_utilisateurs`
--

CREATE TABLE `offre_emploi_offre_utilisateurs` (
  `offre_emploi_id` int(11) NOT NULL,
  `offre_utilisateurs_date` datetime NOT NULL,
  `offre_utilisateurs_id_offre` int(11) NOT NULL,
  `offre_utilisateurs_id_user` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `offre_utilisateur`
--

CREATE TABLE `offre_utilisateur` (
  `date` datetime NOT NULL,
  `id_offre` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `publication`
--

CREATE TABLE `publication` (
  `id` int(11) NOT NULL,
  `contenu` varchar(10000) NOT NULL,
  `date` datetime DEFAULT NULL,
  `fichier` varchar(300) NOT NULL,
  `id_utilisateur` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `publication`
--

INSERT INTO `publication` (`id`, `contenu`, `date`, `fichier`, `id_utilisateur`) VALUES
(46, 'We are ready to start this great course at the University of Rome \"La Sapienza\".\nSee you in March at the Deep Learning Course \nMaster in Big Data Analytics', '2018-12-23 21:08:05', 'fichier', 3),
(28, 'When something is important enough, you do it even if the odds are not in your favor.', '2018-12-23 21:14:32', 'fichier', 1),
(72, 'Better than Facebook !!!', '2018-12-23 21:15:25', 'fichier', 2);

-- --------------------------------------------------------

--
-- Table structure for table `relationship`
--

CREATE TABLE `relationship` (
  `id` int(11) NOT NULL,
  `action_user_id` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_one_id` int(11) DEFAULT NULL,
  `user_two_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `code_postal` int(11) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `gouvernera` varchar(300) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `mot_de_passe` varchar(300) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `pays` varchar(100) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `secteur` varchar(300) DEFAULT NULL,
  `titre_profil` varchar(300) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `code_postal`, `description`, `email`, `gouvernera`, `image_path`, `mot_de_passe`, `nom`, `pays`, `prenom`, `role`, `secteur`, `titre_profil`) VALUES
(1, 123, 'Elon Reeve Musk FRS is a technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; and co-founder of PayPal', 'elon@email.com', 'NY', 'assets/images/users/musk.jpg', '123456', 'Elon', 'USA', 'Musk', 1, 'Space', 'Leader, Tesla & SpaceX founder'),
(2, 9856, 'DescriptionMark Elliot Zuckerberg is an American technology entrepreneur and philanthropist. He is known for co-founding and leading Facebook as its chairman and chief executive officer.', 'Mark@mail.com', 'California', 'assets/images/users/mark.jpg', '123456', 'zuckerberg', 'Tunisia', 'Mark', 0, 'SocialMedia', 'Facebook Founder '),
(3, 4000, 'I am passionate about IT and new technologies, my main focus is to make the web a better place using new and modern web technologies. One of my goals is to improve my knowledge about machine learning and become a data scientist.', 'mans.hosni@gmail.com', 'Sousse', 'assets/images/users/Hosni.jpg', '123456', 'Mansour', 'Tunisia', 'Hosni', 1, 'Info', 'FullStack Dev'),
(4, 5021, 'Software Engineer , aiming to become a Data Scientist', 'ali@gmail.com', 'Tunis', 'assets/images/users/ali.jpg', '123456', 'Ayed', 'Tunisia', 'Mohamed Ali', 0, 'Info', 'Machine learning'),
(5, 2541, 'Food Lover & old Arabic music listner', 'imen@gmail.com', 'Manouba', 'assets/images/users/imen.jpg', '123456', 'Imen', 'Tunisia', 'Belaljia', 1, 'Info', 'JAVA developer'),
(6, 8500, 'Data scientist love Oreedoo & Music & TV shows', 'emna@mail.com', 'Ariana', 'assets/images/users/emna.jpg', '123456', 'Bejaoui', 'Tunisia', 'Emna', 0, 'Info', 'Data scientist'),
(7, 6000, 'Love IT but Lazy :v', 'ayoub@mail.com', 'Ben Arous', 'assets/images/users/ayoub.jpg', '123456', 'Chebbi', 'Tunisia', 'Ayoub', 0, 'Info', 'Java/ J2EE Developer'),
(8, 9853, 'William Henry Gates III (born October 28, 1955) is an American business magnate, investor, author, philanthropist, humanitarian, and principal founder', 'Bill@gmail.com', 'Mayami', 'assets/images/users/bill.jpg', '123456', 'Gates', 'USA', 'Bill', 0, 'IT', 'Dev');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- Indexes for table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKnn2n15aiy9r5gnmub0yxn65gl` (`id_utilisateur`);

--
-- Indexes for table `competence`
--
ALTER TABLE `competence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9e84jnxvln2bo0uos73n3bxyc` (`id_utilisateur`);

--
-- Indexes for table `connexion`
--
ALTER TABLE `connexion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKc66tere3g8t73efqxmhnx4458` (`id_utilisateur1`),
  ADD KEY `FK5wxp39dgiurw9ufrbhumudtbf` (`id_utilisateur2`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKd21q1lii3qgu5jstkrowqdemp` (`id_utilisateur`);

--
-- Indexes for table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpealqnuhdtow78g9l4sl1ryrn` (`id_utilisateur`);

--
-- Indexes for table `j_aime`
--
ALTER TABLE `j_aime`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKa8ntg72d7t5a8y10p8mklx4ig` (`id_utilisateur`),
  ADD KEY `FKdrcnt9mf6b0qo362u90r1lqx6` (`publication`);

--
-- Indexes for table `langue`
--
ALTER TABLE `langue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKsugee242d0vhnk5xg9ivv9e3d` (`id_utilisateur`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKorh700xkhlpnf1m1xc6u69onr` (`id_destinataire`),
  ADD KEY `FKiq4fimo2k0febunp0nvy0h6wc` (`id_envoyeur`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrork3t3a2ci8l669rpm7myo7v` (`id_recepteur`),
  ADD KEY `FKlplfaddkm46v5kdmkq39vi9n4` (`id_envoi`);

--
-- Indexes for table `offre_emploi`
--
ALTER TABLE `offre_emploi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjtiin69bph1it5uwblbtbpia2` (`id_recruteur`);

--
-- Indexes for table `offre_emploi_offre_utilisateurs`
--
ALTER TABLE `offre_emploi_offre_utilisateurs`
  ADD PRIMARY KEY (`offre_emploi_id`,`offre_utilisateurs_date`,`offre_utilisateurs_id_offre`,`offre_utilisateurs_id_user`),
  ADD UNIQUE KEY `UK_cgxsc1xk4oap3j9piyyg8hp39` (`offre_utilisateurs_date`,`offre_utilisateurs_id_offre`,`offre_utilisateurs_id_user`);

--
-- Indexes for table `offre_utilisateur`
--
ALTER TABLE `offre_utilisateur`
  ADD PRIMARY KEY (`date`,`id_offre`,`id_user`),
  ADD KEY `FKknf1xctm4sff4j80kh15xww85` (`id_offre`),
  ADD KEY `FKo4kawlxm9js63fu0ehmqsjpuo` (`id_user`);

--
-- Indexes for table `publication`
--
ALTER TABLE `publication`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlmvhe0x8c3sbgrih6gvngv0nr` (`id_utilisateur`);

--
-- Indexes for table `relationship`
--
ALTER TABLE `relationship`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `connexion`
--
ALTER TABLE `connexion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `langue`
--
ALTER TABLE `langue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `relationship`
--
ALTER TABLE `relationship`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
