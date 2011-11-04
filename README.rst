===============================================
Responsive Diazo
===============================================

.. contents:: Table of Contents
   :depth: 2

Overview
--------

Responsive Diazo is an installable Plone Theme developed by `Simples
Consultoria <http://www.simplesconsultoria.com.br/>`_ using the **theming** and
**packaging** features available in `plone.app.theming`_.

You could use this theme as a start for you own Diazo themes -- but send us a
postcard, ok ;-)

Requirements
------------

    * Plone 4.1.x (http://plone.org/products/plone)
    
    * plone.app.theming (*will be installed as a dependency of this package*)

Screenshots
------------

Layout of the site when viewed in a computer resolution:

.. image:: https://github.com/simplesconsultoria/beyondskins.responsive/raw/master/beyondskins.responsive-full.png

Layout of the site when viewed with a tablet resolution:

.. image:: https://github.com/simplesconsultoria/beyondskins.responsive/raw/master/beyondskins.responsive-reduced.png

Installation
------------

Getting the theme
~~~~~~~~~~~~~~~~~~~~

Zip file
++++++++++

If you are an end user, you might enjoy installation via zip file import.

    1. Download a `zip file <https://github.com/simplesconsultoria/beyondskins.responsive/raw/master/beyondskins.responsive.zip>`_ 
        
    2. Import the theme from the Diazo theme control panel.

Buildout
++++++++++

If you are a developer, you might enjoy installing it via buildout.

Add ``beyondskins.responsive`` to your ``plone.recipe.zope2instance`` section's *eggs* parameter e.g.::

    [instance]
    eggs =
        Plone
        ...
        beyondskins.responsive

Or, you can add it as a dependency on your own product *setup.py*::

    install_requires=[
        ...
        'beyondskins.responsive',
    ],


Enabling the theme
~~~~~~~~~~~~~~~~~~~~

    Select and enable the theme from the Diazo control panel. That's it!


Credits
-------

    * Thiago Tamosauskas (thiago at simplesconsultoria dot com dot br) - CSS, 
      Accessibility and Q&A.
      
    * Andre Nogueira (andre at simplesconsultoria dot com dot br) - Conception 
      and prototype.
    
    * Davi Lima (davi at simplesconsultoria dot com dot br) - Translation,
      Fixes.

.. _`plone.app.theming`: http://pypi.python.org/pypi/plone.app.theming
.. _`Plone 4.1`: http://pypi.python.org/pypi/Plone/4.1rc2

