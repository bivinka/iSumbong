<?php

return [

	/*
	|--------------------------------------------------------------------------
	| oAuth Config
	|--------------------------------------------------------------------------
	*/

	/**
	 * Storage
	 */
	'storage' => 'Session',

	/**
	 * Consumers
	 */
	'consumers' => [

		'Google' => [
			'client_id'     => '1081017298761-8aur8iq1famfv78a7fe7lebv0hj7f8ca.apps.googleusercontent.com',
			'client_secret' => 'vk4vfNcKuCik0X_KzspasA30',
			'scope'         => ['userinfo_email', 'userinfo_email'],
		],

	]

];