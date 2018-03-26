import React, { Component } from 'react';
import Particles from 'react-particles-js';


class Background extends Component{

    render(){
        return (
          <Particles
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		},
                number: {
                    value: 170,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  }
            	}}

            />
        )
    };

}

export default Background;
