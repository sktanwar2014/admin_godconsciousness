-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2020 at 12:21 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `godconsciousness`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `type` varchar(500) DEFAULT NULL,
  `content` text,
  `is_active` int(11) NOT NULL,
  `posted_by` int(11) DEFAULT NULL,
  `posted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `type`, `content`, `is_active`, `posted_by`, `posted_at`, `updated_by`, `updated_at`) VALUES
(1, 'HOME_ABOUTGC', 'God\'s Consciousness is a community initiated by Ms. Dimple Anil (a Clairvoyant Psychic Medium, an educationist for more than three decades) who receives MESSAGES in the form of PRAYERS, GUIDELINES & DIRECTIONS from our Loved Ones who have crossed over - Our GUARDIAN ANGELS. These Prayers and Directions are simple, pragmatic and extremely powerful and help us receive, manifest Happiness, love, great health, wealth, fame, safety, security, great relationships, proficiency in their talent or skills, prosperity, amazing academic, sports or professional growth, relief from legal battles, awards and accolades, spiritual growth and ascension of your spirit, wisdom – in other words – a haven where one takes control, holds the remote of one’s life consciously, in Divine Alignment.', 1, 1, '2020-04-01 03:44:35', NULL, '2020-04-01 03:44:35');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `address` varchar(500) NOT NULL,
  `phone_no` int(10) NOT NULL,
  `email_add` varchar(50) NOT NULL,
  `map_url` int(11) DEFAULT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone_no`, `email_add`, `map_url`, `is_active`) VALUES
(1, '203 Fake St. Mountain View, San Francisco, California', 946556, 'info@yourdomain.com', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `direction`
--

CREATE TABLE `direction` (
  `id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `direction`
--

INSERT INTO `direction` (`id`, `image_id`, `title`, `description`, `is_active`, `created_on`, `created_by`, `updated_on`) VALUES
(1, 0, 'William Shakespeare3e2', 'O Lord that lends me life, lend me a heart replete with thankfulness.', 1, '2020-03-20 22:55:12', '2020-03-20 22:55:12', '2020-03-20 22:55:12'),
(2, 0, 'Robert Louis Stevenson', 'Keep your eyes open to your mercies. The man who forgets to be thankful has fallen asleep in life.', 1, '2020-03-20 22:55:12', '2020-03-20 22:55:12', '2020-03-20 22:55:12'),
(3, 0, 'Jefferson Bethke', 'Thankfulness is the quickest path to joy for give me this life.', 0, '2020-03-20 22:55:12', '2020-03-20 22:55:12', '2020-03-20 22:55:12'),
(27, NULL, 'ashishs', 'gopal', 1, '2020-04-02 04:46:01', '2020-04-02 04:46:01', '2020-04-02 04:46:01'),
(28, NULL, 'ashishsd', 'gopal', 1, '2020-04-02 04:46:01', '2020-04-02 04:46:01', '2020-04-02 04:46:01'),
(29, NULL, 'ashishsdd', 'gopal', 1, '2020-04-02 04:46:01', '2020-04-02 04:46:01', '2020-04-02 04:46:01'),
(30, NULL, 'ashishsd', 'gopal', 1, '2020-04-02 04:46:14', '2020-04-02 04:46:14', '2020-04-02 04:46:14'),
(31, NULL, 'ashishs', 'gopal', 1, '2020-04-02 04:46:14', '2020-04-02 04:46:14', '2020-04-02 04:46:14'),
(32, NULL, 'ashish', 'gopal', 1, '2020-04-02 04:46:15', '2020-04-02 04:46:15', '2020-04-02 04:46:15');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` text,
  `event_date` date DEFAULT NULL,
  `posted_by` int(11) DEFAULT NULL,
  `posted_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `image_id`, `title`, `description`, `event_date`, `posted_by`, `posted_on`, `updated_on`, `is_active`) VALUES
(1, NULL, 'csacd', 'd', NULL, 0, '0000-00-00 00:00:00', '2020-04-02 02:56:44', 0),
(2, NULL, 'csacd', 'dd', NULL, NULL, '2020-04-02 02:56:45', '2020-04-02 02:56:45', 1),
(3, NULL, 'csacd', 'dds', NULL, NULL, '2020-04-02 02:56:45', '2020-04-02 02:56:45', 1),
(4, NULL, 'csacd', 'ddsc', NULL, NULL, '2020-04-02 02:56:45', '2020-04-02 02:56:45', 1),
(5, NULL, 'csacd', 'ddscs', NULL, NULL, '2020-04-02 02:56:45', '2020-04-02 02:56:45', 1),
(6, NULL, 'csacd', 'ddscsd', NULL, NULL, '2020-04-02 02:56:45', '2020-04-02 02:56:45', 1),
(7, NULL, NULL, NULL, NULL, NULL, '2020-04-02 03:24:04', '2020-04-02 03:24:04', 1),
(8, NULL, NULL, NULL, NULL, NULL, '2020-04-02 03:24:21', '2020-04-02 03:24:21', 1);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image_name`, `is_active`, `created_at`) VALUES
(1, 'image_tall_1', 1, '2020-03-14 07:11:16'),
(2, 'image_tall_2', 1, '2020-03-14 07:11:16'),
(3, 'image_tall_3', 1, '2020-03-14 07:11:16');

-- --------------------------------------------------------

--
-- Table structure for table `link`
--

CREATE TABLE `link` (
  `id` int(11) NOT NULL,
  `link` int(11) DEFAULT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `miracle`
--

CREATE TABLE `miracle` (
  `id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `title` varchar(500) NOT NULL,
  `descrpition` text NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `miracle`
--

INSERT INTO `miracle` (`id`, `image_id`, `title`, `descrpition`, `is_active`, `created_on`, `created_by`, `updated_on`) VALUES
(1, NULL, 'William Shakespeare', 'undefined', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-03-20 16:44:23'),
(2, NULL, 'Piano Lesson for Children', 'Life seems to be sorted fully.Thank you Dimple MA.Love you.I wanted a clean, spacious home.I have.I wanted to wear sarees to my workplace.I have started.I wanted loads of plants in my home.I have I wanted enough resources for the education of my children and their marriages.Both married and settled.I wanted to be Naani Daadi.I am both I wanted my son and daughter in law to have good relationship.They have.I wanted my children to travel.They do.I wanted good health for my husband and myself.We are healthy.Bow, Namaskar, love, respect, regards to you Dimple Ma.Jeenay ka mazaa Jeenay ka tareeka', 1, '2020-03-20 16:44:23', '2020-03-20 16:44:23', '2020-03-20 16:44:23'),
(3, NULL, 'Bible studies like Bereans did', 'Please share I conceived after four years of marriage, loads and loads of efforts. I was happy but insecure and very anxious. Was sowing mixed bag of emotions.Insecurities and anxieties out did happiness. I would thank profusely for this conception but at the same time constantly sowed anxiety, fear, doubt, insecurity.Then miscarriage,My world fell apart but it was an amazingly enriching experience. I knew what wrong I had sown. Strange confidence came in me to sow more and more of goodies, good feelings. This miscarriage is my teacher. I understood what Dimple Auntyji says. I knew where I was wrong, what I had sown I started meditations.I started shifting my focus. I started feeling better. This my miscarriage is my teacher, it helped me in all my living. Didn\'t conceive for next three years, but working on myself continued.Just day before my pregnancy is confirmed. I am at a much better place today. I know this baby will be born healthy and happy. I am so sure. Thank you Dimple Auntyji. Journey of knowing what we want and what we sow. I get results of my sowing instantly.I sow low feel for whatever reason, I get more of it and it comes from anywhere. I sow good feelings and I get the same from anywhere.Sow bad, receive badder, says Auntyji, friends I am living this.Please be alert. I am a living example. I sowed thank you, happiness and anxiety in first conception. Anxiety was more and miscarriage happened, now happiness and gratitude is more and I know I have in my womb healthy and happy Soul. I am confident.Anxiety when it comes, instead of letting it multiply, I wash my face, put on music, start meditation, go for a walk. All directions of Auntyji I follow to the T.Thank you dear Aunty ji for making me the Creator of my life.ðŸ™‡ Bow Bow Bow Bow to you.Dimple Anil: Your learning through a rough process shows how Blessed you are dear. Divine Wisdom, your Trust and Faith is immense. Anyone would have buckled.Not easy, not at all from where you started and where your realization has brought you today is worth emulating. My happiness for you is gushing out, infact I am smiling with teary eyes. You truly are an example of being a Creator of your destiny. Thank you so much dear for your sharing.All Blessings dear. THEY have no option but to shower and keep on showering Blessings.\r\nInsta Feeds\r\nLatest Events', 1, '2020-03-20 16:44:23', '2020-03-20 16:44:23', '2020-03-20 16:44:23'),
(4, NULL, 'I come from and got married into a joint family.', 'Drink Dine & Dance Last night my husband was very sad and tensed.We had plans of going for Drinks, Dance & Dinner yesterday but since he was so tensed he came back & refused. “Tina not today. Let’s just go to the temple.No party on my mind. I am not at ease.”, he said.I agreed and pointed at Neetu maa\'s pic to him, “Look at HER ! Tell HER your worries & things will be fine. He went off to sleep at 8 when he woke up at 9 pm, he saw me all ready and decked up. “Where are you going?,” he asked.I replied, “This is the last Saturday of 2019 so you relax I\'m going to celebrate alone.”Then I see him getting ready.As we both were about to leave, he told me that he didn’t have money.I quipped, “ Well, that’s a smart way of asking me ?!” I kept around ?5k but I knew that bills at such pubs go beyond ?8kto 9kI left with my husband, my brother in law and 2 more friends. When we reached our destination we got to know that one of the biggest chains of Delhi named Lord of the Drinks has opened in Lucknow and that night was its inaugural party where entry was strictly through invitation.I politely asked the bouncer outside the gate, “Can I just go in and have a look around? “ pleasantly he said, “YES.”I went in. My husband and others followed me.Then to our surprise drinks were offered, music dance, masti.! We stayed there till 1.00 am, till it all got over.Everyone including my husband was zapped,My brother in law in utter disbelief kept chanting “Ye kya tha ? What was this? Free entry and free drinks worth over ? 11 k and No bill??? How and why did we we were get treated like privileged important guests???? “We had a BLAST!I said, “This was a Divine Party gifted by the Angels. Before leaving the house I told Neetu maa, I have ?5k rest is up to you.”See what SHE & THEY weaved for not only ne but my companions.... man.. VVIP TREATMENT, MUSIC, DANCE, FREE DRINKS ... a truly MIRACULOUS MAGICAL NIGHT.” They all are still in Shock!!!! and I more empowered and ever more grateful to THEM for raising my FAITH in THEM, THE DIVINE, ANGELS, GOD to this level. I am so proud of my faith in THEM. THEY give beyond our expectations and how!!!! WOW is my new mantra. I am in tears while sharing this with u all. It was so MAGICAL.NOT a penny spent and extravagant extraordinary magical fun filled evening was gifted by the Divine.Thank you Divine Thank you Neetu maa Thank you for everything ??????', 1, '2020-03-20 16:44:23', '2020-03-20 16:44:23', '2020-03-20 16:44:23');

-- --------------------------------------------------------

--
-- Table structure for table `obe`
--

CREATE TABLE `obe` (
  `id` int(11) NOT NULL,
  `link_id` int(11) DEFAULT NULL,
  `description` text,
  `posted_by` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `posted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `obe`
--

INSERT INTO `obe` (`id`, `link_id`, `description`, `posted_by`, `posted_at`, `updated_by`) VALUES
(1, NULL, 'Dear AllSharing my Out of Body Experience. I would like to share something peculiar.&nbsp;It has been 10 days and every night I seem to be getting similar visions.&nbsp;I see myself on the surface of a sea, standing without any support.&nbsp;There I notice a figure that seems to be 3 in 1.&nbsp; The first figure is a very tall person who is dressed as a saint, has peculiarly long feet and fair skin, who I now recollect to have seen a couple of times.&nbsp;Second is my maternal Grandmother (Naani). The&nbsp; Third is someone who I recall to be tall and thin with grey eyes. From 3 THEY merge into ONE. And now My Nani starts talking to me.&nbsp;SHE says, “Just look at the amount of ABUNDANCE that is here. It belongs to you. Take your share and go. Come, bring your buckets and fill it.”I pick up a bucket next to me and bend down to fill it with sea water- my share of abundance. As I look into the bucket, expecting water to collect in it, I notice something very different. It was being filled with STARS instead.&nbsp;There was one thing SHE kept repeating, “Take YOUR share. Don’t get swayed by what is in other’s bucket.&nbsp;There is ENOUGH for each one in this UNIVERSE. WE have&nbsp; ample to give you all individually. Come and take your own!”SHE went on to explain, “What do WE mean by ‘Another’s bucket ’? It means, don’t see what others have and thereby want it for yourself just because they have it. If others have a better life, don’t resort to jealousy and crave theirs. Dont&nbsp; say that you want what they have.&nbsp;DESIRE, Want, Ask anything, everything that you need because you feel for it. You really really want it for yourself... it could be more money, better relationships, good health, a better job, children having a great life, travel, jewels, clothes, food ..... anything!!!FOCUS on what You WANT and WHAT makes You HAPPY. DO NOT FEEL SAD. Don’t Ask out of ANXIETY, FEAR, LACK, PAUCITY.. FEEL GOOD and ASK.&nbsp; THE&nbsp; INTENT behind your Want or Desire -must be KIND, GOOD and RIGHT .&nbsp;Take your share of HAPPINESS; we have STARS for you too.\r\n\r\n', '2020-03-21 00:29:15', '2020-03-21 00:29:15', '2020-03-21 00:29:15');

-- --------------------------------------------------------

--
-- Table structure for table `prayers`
--

CREATE TABLE `prayers` (
  `id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `prayer` text,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prayers`
--

INSERT INTO `prayers` (`id`, `image_id`, `prayer`, `is_active`, `created_by`, `created_at`) VALUES
(1, NULL, 'Jholiyan  Best Sehat Tandrusti AurKhushiyon Se Bhar Do Ji.Dukh Takleef Kasht Intezaar Saaray Har Lo Ji.Shukrana Shukrana Shukrana Meray Malik.', 1, 1, '2020-03-01 08:00:00'),
(2, NULL, 'Me And My Family Are Blessed\r\nWe Are Healthy,We Are In Bliss.\r\nWe Are Financial Magnets.\r\nThank You My Lord,Thank You My Divine,\r\nThank You My Lord.', 1, 2, '2020-03-02 08:00:00'),
(3, NULL, 'I Ask You My Divine To Guide Me At Each Step.\r\nI Ask You My Lord To Help Me Live\r\nEach Moment With Complete Consciousness.\r\nThank You My Lord ,\r\nThank You My Divine.', 1, 3, '2020-03-03 08:00:00'),
(4, NULL, 'I Am Filled With Deep Gratitude\r\nMy Lord.\r\nI Ask You To Bless Whatever\r\nI Have And Shower Some More Of\r\nGood Health And Happy Times.\r\nThank You Lord,Thank You My Lord\r\nThank You My Lord.', 1, 4, '2020-03-04 08:00:00'),
(5, NULL, 'Mangal Hi Mangal\r\nHum Sab Ka Mangal Kar Do Ji\r\nDukh Takleef Kasht Intezaar Losses Sab Har Lo Ji\r\nShukrana Shukrana Shukrana Meray Malik.', 1, 5, '2020-03-05 08:00:00'),
(6, NULL, 'I Attract Divine\r\nPhysical, Mental,\r\nSpiritual, Emotional,\r\nFinancial and Social Health\r\nThank You Divine\r\nThank You Divine\r\nThank You Divine', 1, 6, '2020-03-06 08:00:00'),
(7, NULL, 'My Lord\r\nMy Divine\r\nMy Protector\r\nFill my day with\r\nSafety, Security,\r\nHappiness and Blessings\r\nThank You Divine\r\nThank You Divine\r\nThank You Universe', 1, 7, '2020-03-07 08:00:00'),
(8, NULL, 'I Attract\r\nDivine Wisdom and Miracles in my life Now\r\nI am Blessed\r\nThank You Divine\r\nThank You Divine\r\nThank You Divine', 1, 8, '2020-03-08 08:00:00'),
(9, NULL, 'We Attract Divine Abundance\r\nWe Attract Divine Providence\r\nWe Attract Divine Health\r\nWe are Blessed\r\nWe are Financial Magnets\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 9, '2020-03-09 07:00:00'),
(10, NULL, '\r\nWe surrender completely to the Divine Will and Plan\r\nand Ask for Loads and Loads of Good and Happy Moments\r\nfor Myself and My Kith and Kin\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 10, '2020-03-10 07:00:00'),
(11, NULL, '\r\nMy Lord\r\nMy Divine\r\nMy Energy\r\nFill me Today\r\nFill me Now with\r\nDivine Happiness and Blissful Moments\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 11, '2020-03-11 07:00:00'),
(12, NULL, 'I Attract Divine Health\r\nI Have Healthy Internal and External organs\r\nI Attract Financial Health\r\nI am Blessed and Happy\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 12, '2020-03-12 07:00:00'),
(13, NULL, 'I am Calm\r\nI am Content\r\nI am Grateful\r\nI am Blessed\r\nI am a Financial Magnet\r\nThank You Universe\r\nThank You Divine\r\nThank You Universe', 1, 13, '2020-03-13 07:00:00'),
(14, NULL, 'I Surrender completely to the Divine Will and Plan\r\nand Ask for Bliss and Blessings\r\nPeace and Prosperity,\r\nSafety and Security\r\nfor Myself and My Kith and Kin\r\nThank You Divine\r\nThank You Divine\r\nThank You Universe', 1, 14, '2020-03-14 07:00:00'),
(15, NULL, 'My Lord\r\nMy Divine\r\nI Thank You for each moment of my life\r\nI Thank You for each and everything\r\nI Thank You for Showering Bliss and Blessings\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 15, '2020-03-15 07:00:00'),
(16, NULL, 'Sukh Shanti\r\nDhanDaulat\r\nSehatTandrusti\r\nSuraksha Santosh\r\nKhushiyonBarkaton\r\nIzzat MaanSamman\r\nTrust and Surrender\r\nDivine Wisdom seyBhar do ji\r\nDukhTakleefKashtSaarayhar Lo ji\r\nShukriya meray Malik\r\nShukriya meray Malik\r\nShukriya meray Malik', 1, 16, '2020-03-16 07:00:00'),
(17, NULL, 'I and my kith and kin Attract\r\nDivine Abundance,\r\nDivine Happiness,\r\nDivine Health and\r\nLoads and Loads of Divine Blessings\r\nI Receive from my Lord All that I Ask for\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 17, '2020-03-17 07:00:00'),
(18, NULL, 'I Surrender completely\r\nto the Divine Will and Plan\r\nand Ask for Long, Healthy Life of Myself and My Family\r\nI know my Asking is Answered for sure\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 18, '2020-03-18 07:00:00'),
(19, NULL, 'I am Calm\r\nI am Content\r\nI am Blessed\r\nI am Grateful\r\nI am Healed\r\nI am a Financial Magnet\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 19, '2020-03-19 07:00:00'),
(20, NULL, '\r\nShower Shower\r\nMy Lord\r\nMy Divine\r\nOn Me and My Family\r\nBliss and Blessings\r\nPeace and Prosperity\r\nHealth and Happiness\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 20, '2020-03-20 07:00:00'),
(21, NULL, 'I come to you my Lord\r\nwith Open Palms and Ask\r\nLoads of Best and Happy Moments\r\nfor Myself and My Family\r\nI am Blessed\r\nI am Ready for Miracles\r\nThank You Divine\r\nThank You Universe\r\nThank You Divine', 1, 21, '2020-03-21 07:00:00'),
(22, NULL, 'Jholiyan Barkaton aur Izzat MaanSammanseyBhar do ji\r\nDukhTakleefKashtSaarayhar Lo ji\r\nShukriya meray Malik\r\nShukriya meray Malik\r\nShukriya meray Malik', 1, 22, '2020-03-22 07:00:00'),
(23, NULL, 'FORGIVENESS PRAYERS\r\nI seek Forgiveness from the souls of this life and past lives\r\nwhom I May have harmed knowingly or unknowingly\r\nI Love you\r\nI Respect you\r\nThank you\r\nThank you\r\nThank you\r\nThank you for Forgiving Me\r\nI Forgive the souls of this life and past lives\r\nwho May have harmed me knowingly or unknowingly\r\nI Love you\r\nI Respect You\r\nThank you\r\nThank you\r\nThank you\r\nThank you for accepting my Forgiveness\r\nI Forgive my own self for at times\r\nI May have been unkind or disloyal to my own self\r\nI Love Myself\r\nI Respect Myself\r\nI Forgive Myself\r\nThank you\r\nThank you\r\nThank you\r\nI Am Forgiven\r\nI Forgive\r\nI Forgive Myself\r\nThank you Divine\r\nThank you Divine\r\nThank you Divine', 1, 23, '2020-03-23 07:00:00'),
(24, NULL, 'Mangal hi Mangal kar do ji\r\nKhushiyon aur Barkaton se bhar do ji\r\nDukhTakleefKashtIntezaar\r\nSab Har Lo Ji\r\nShukriya Meray Malik\r\nShukriya Meray Malik\r\nShukriya Meray Malik', 1, 24, '2020-03-24 07:00:00'),
(25, NULL, 'I Attract Success in All that I Say and Do\r\nI am a Winner\r\nI am Blessed\r\nI am a Financial Magnet\r\nThank You Divine\r\nThank You Divine\r\nThank You Divine', 1, 25, '2020-03-25 07:00:00'),
(26, NULL, 'I Attract Divine Happiness for Myself and my Family\r\nI Attract Peace and Prosperity for Myself and My Family\r\nI Receive what I Ask for\r\nI am Blessed\r\nThank You Divine\r\nThank You Divine\r\nThank You Divine', 1, 26, '2020-03-26 07:00:00'),
(27, NULL, 'I am Calm\r\nI am Content\r\nI am Grateful\r\nI am Happy\r\nI am Blessed\r\nThank You Divine\r\nThank You Divine\r\nThank You Divine', 1, 27, '2020-03-27 07:00:00'),
(28, NULL, 'I Attract Divine Wisdom for Myself and My Family\r\nWe are All Together and Happy\r\nWe are Blessed with Loads and Loads of Happy Times\r\nThank you Divine\r\nThank you Divine\r\nThank you Divine', 1, 28, '2020-03-28 07:00:00'),
(29, NULL, 'My Lord\r\nMy Divine\r\nShower Shower and keep on Showering\r\nBlessings, Bliss,Peace, Prosperity\r\nand Loads of Financial Health\r\non Me and my Family now\r\nThank You Divine\r\nThank You Divine\r\nThank You Divine', 1, 29, '2020-03-29 07:00:00'),
(30, NULL, 'My Lord\r\nFill Me With Positivity And Complete Well Being.\r\nThank You My Lord\r\nThank You My Lord ,Thank You My Lord.', 1, 30, '2020-03-30 07:00:00'),
(31, NULL, 'My Lord,My Power\r\nEnvelope Me And My Family In Golden Ball Of\r\nDivine Light Of Complete Protection.\r\nThank You My Lord ,Thank You My Power.', 1, 31, '2020-03-31 07:00:00'),
(60, NULL, NULL, 1, NULL, '2020-04-02 03:32:08'),
(61, NULL, 'Meray Bhagwan ji Meray Khuda ji My Lord NOW hold me and take me to places, people and things that will make me Laugh, Happy and Prosperous. Thank You Meray Bhagwan ji Thank You Meray Khuda ji Thank You My Lord.', 1, NULL, '2020-04-02 04:04:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `password` blob,
  `token` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact`, `email`, `address`, `user_id`, `password`, `token`, `is_active`, `created_at`) VALUES
(1, 'Ashish', NULL, NULL, NULL, 'ashish@gmail.com', 0x8f87062ea3f247ebf1435932215f7dd0, 'fjas;ldfkhdsjklfhskld fhslkdhf klshdflkshdfla', 1, '2020-03-21 17:36:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `direction`
--
ALTER TABLE `direction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `link`
--
ALTER TABLE `link`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `miracle`
--
ALTER TABLE `miracle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `obe`
--
ALTER TABLE `obe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prayers`
--
ALTER TABLE `prayers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `direction`
--
ALTER TABLE `direction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `link`
--
ALTER TABLE `link`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `miracle`
--
ALTER TABLE `miracle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `obe`
--
ALTER TABLE `obe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prayers`
--
ALTER TABLE `prayers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
