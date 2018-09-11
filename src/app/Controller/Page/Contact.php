<?php

namespace App\Controller\Page;

use \Engine\Controller\Controller;

class Contact extends Controller {

    public function show () {

        /*------------------------------------
            HEAD
        ------------------------------------*/

        // SEO
        $this->head['title'] = 'Website — Contact';
        $this->head['description'] = '';
        $this->head['opengraph'] = '/og/1200-630.png';

        // Robots
        $this->head['allow-robots'] = true;

        /*------------------------------------
            RENDER
        ------------------------------------*/

        $this->render('contact');
    }

}
