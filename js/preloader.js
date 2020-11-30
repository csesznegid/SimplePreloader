window.onload = function() {
    /**
     * CSS properties of the Preloader Container <div/>
     *
     * @type Object
     * @private
     */
    const preloaderStyle = {
        top:             '0',                  // Placed 0px from the top
        left:            '0',                  // Placed 0px from the left
        position:        'fixed',              // Fix position
        width:           '100vw',              // Width is 100% of the browser window's width (viewport width => vw)
        height:          '100vh',              // Width is 100% of the browser window's height (viewport height => vh)
        zIndex:          '2000',               // Placement on the z-axis (higher number means that the element is "closer" to the viewer)
        fontSize:        '2em',                // 2em means 2 times the size of the current font
        paddingLeft:     '50vw',               // Move content right by 50% of the browser window's width (horizontal center)
        paddingTop:      '50vh',               // Move content down by 50% of the browser window's height (vertical center)
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black color with 50% transparency
    }

    /**
     * Add Preloader to <body/>
     *
     * @returns void
     * @private
     */
    function addPreloader()
    {
        // Preloader Container
        let preloaderContainer = document.createElement('div');
        preloaderContainer.id  = 'preloader'
        for (let property in preloaderStyle) {
            preloaderContainer.style[property] = preloaderStyle[property];
        }

        // Spinner
        let preloaderSpinner = document.createElement('span');
        preloaderSpinner.classList.add('fa');      // Font-Awesome CSS class
        preloaderSpinner.classList.add('fa-cog');  // Font-Awesome CSS class for a gear icon
        preloaderSpinner.classList.add('fa-spin'); // Font-Awesome CSS class for a spinning animation

        // Add spinner to the container
        preloaderContainer.append(preloaderSpinner);

        // Add preloader to <body/>
        document.body.insertAdjacentElement('afterbegin', preloaderContainer);
    }

    /**
     * Removes Preloader from <body/>
     *
     * @returns void
     * @private
     */
    function removePreloader()
    {
        document.body.removeChild(
            document.querySelector('#preloader')
        );
    }

    /**
     * Send Request
     *
     * @param   {String} url
     * @param   {*} data
     * @param   {String} method
     * @returns {Promise<any>}
     * @async
     * @private
     */
    async function _api_request(url, data = null, method = 'GET')
    {
        // Start the Request with a preloader
        addPreloader();

        let responseData;

        // Send the Request
        let response = await fetch(url, {
            method: method,
            body:   data,
        });
        responseData = await response.json();

        // When the Response is ready, remove the preloader
        removePreloader();

        return responseData;
    }
}
