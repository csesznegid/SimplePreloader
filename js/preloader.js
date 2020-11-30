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
}
