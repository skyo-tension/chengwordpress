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
define( 'DB_NAME', 'chengwordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         '/2] K|suUnf$fA-S`{0G*{TTi{b3^E~jEPvlV3P9PF``msqshS8^(rDZT`A o.t`' );
define( 'SECURE_AUTH_KEY',  'iVf`Dx=mX=UWKsCUBJz|B`eBrC!/F-$`Ud[nlt!5~@gn[5#RqO&6.mKqm%!Ra~7[' );
define( 'LOGGED_IN_KEY',    'IY*zs%]/2I_oR>>,EFi1p;FeO~|HFW|t0G1j4&Hh)i^:B-HGub[nU-80ZUZfPjxF' );
define( 'NONCE_KEY',        'JIuG`_=}u)ts!%`Nmw0;dEdou69OTu[X>_i2vwsnE>_m~BHjT5qoH[w%^tAZ.HCi' );
define( 'AUTH_SALT',        'PMn,+oM,J$dg@)4n{{W]tyK6Y|^2XRZce8iV~[^a)=w%Ei .!MYS?y.--%@7kf!#' );
define( 'SECURE_AUTH_SALT', 's%j7]_hG:`<x+dNVw_S{~#e wT[:(`sS,]vKa`9gO,xr,J}z28]#O|kMFsU#j`fS' );
define( 'LOGGED_IN_SALT',   'rc>?L*oTv1+Vv6p@v7s.pty3#M&^U0C5oxr;Im$gH[]jMWuTc~<oo7><p Bb;[S/' );
define( 'NONCE_SALT',       'kWX4XESIXh kuu6zVVu?LSV9>`OgF]/wNJKoh+v-p7FjQ~!I~>}GbE/zEjjQo-*1' );

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
