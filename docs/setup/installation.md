---
title: Installation
-------------------

## Requirement

I don't know exactly, but it's been tested on

- [PHP](https://www.php.net/) 7.4 or above.
- [Laravel](https://laravel.com/) 8 or above.
- [Composer](https://getcomposer.org/download/)

## Installation

Indonesian Boundaries is essentially a set of composer [packages](https://packagist.org/packages/octopyid/indonesian-boundaries) that can be installed over composer.

```bash
composer require octopyid/indonesia-boundaries:dev-main
```

```bash
php artisan vendor:publish --provider="Octopy\Indonesian\Boundaries\ServiceProvider"
```


Indonesian Boundaries Service Providers are automatically registered.

If you want to register conditionally instead automatically please register our service provider in the `AppServiceProvider`.

```php
<?php

namespace App\Providers;

...
use Octopy\Indonesian\Boundaries\ServiceProvider as IndonesianServiceProvider

class AppServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register()
    {
    	$this->app->register(IndonesianServiceProvider::class);
    }
}
```

Finally, you should also prevent the Indonesian Boundaries package from being auto-discovered by adding the following to your `composer.json` file:

```json
"extra": {
    "laravel": {
        "dont-discover": [
            "octopyid/indonesian-boundaries"
        ]
    }
},
```
That's all 😃