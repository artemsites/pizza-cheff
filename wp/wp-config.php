<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'artemkm9_pizzach' );

/** Database username */
define( 'DB_USER', 'artemkm9_pizzach' );

/** Database password */
define( 'DB_PASSWORD', 'nZp7yy%D' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'CMtL$;TL:EX.sT7Y<-&r :cz/=s*cRD}WSW($7H%zY?^ IhJ9REORMP!7s36)ZQZ' );
define( 'SECURE_AUTH_KEY',  '&o-k|A20y .3-k! ~|DdLTV1k:qrm4FN&8**;|:W7^jdQYZ.H,8G]ee:E.ln^6Cf' );
define( 'LOGGED_IN_KEY',    '<O|2Z#r}+2&q}+A@NhG&!)F|F:fsGFzA}*IQZ@c%^8jUox7a%mJ8m3P7e!~#Ce^)' );
define( 'NONCE_KEY',        'o!2`vff:SY? |ZZ-hbXcU8xEs>kGkKG?y*AyDOBb6#9Qb<-f(pn3j_R?#,lxb1T,' );
define( 'AUTH_SALT',        '47OcW<Y=4fL[ i>QXNr]5+DVWdnA-D/]oNYI-!:.pU(&QpLqP<nJlFIQ^9]Ju~cY' );
define( 'SECURE_AUTH_SALT', '/cTR(}ea[d$g3:Wd6.w&Gke5.{=7X>IW.R(2-_HeDAPJD>TuA$`vvUtZ}~+p*7%m' );
define( 'LOGGED_IN_SALT',   '| e@zM%?8ghP#yVa|!hF <r0*,zg^X{5#ZlP^x3``U5el| A~k3TZr]Cc!:&F}Vl' );
define( 'NONCE_SALT',       '!;E85N8,,Y3QD~[@*4H$y~}r<_{v5O),|dpc2 ])0x8.(.umx<gCXhXXg/GyO`Us' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
