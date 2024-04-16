const mfChart = require("mofron-comp-chartjs");
const {Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend} = require("chart.js");
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


/**
 * @file mofron-comp-chartjs/index.js
 * @brief chart.js component for mofron
 * @license MIT
 */
module.exports = class extends mfChart {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("ChartJSBar");
            
	    /* init config */
	    this.type('bar');
	    this.options({
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0
                    }
                }
            });

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            this.baseColor(prm);
            return this.confmng("mainColor", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
