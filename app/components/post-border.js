import React, { Component } from 'react';

export default class PostBorder extends Component {
    render() {
        let p1 = 'M162.3,372c-8.1,1.1-13.7,2.3-19,1.7c-22.7-2.7-66-12.5-82.4-39 c-16.4-26.5-45.1-49-50-82.7C6.1,219.1,0,189.6,6.2,164.3c-0.1,7.9,0.3,15.2,0.9,21c1,9.9,5.2,19.4,8.6,47.1 c1.7,14,7.4,24.3,15.7,35.4c3.4,4.5,6.9,8.9,9.9,13.7c0.5,2.4,1.2,4.7,2.2,7c4,9.4,12.1,24.6,22.4,28c1.9,0.6,3.9,1,5.4,2.3 c1.7,1.4,2.5,3.5,3.7,5.3c2.1,3.1,6.2,6,9.9,8.8c0.7,1,1.4,2,2,3C106.4,364.2,139.5,369.6,162.3,372 M373,126.8 c-5.9-47-23.7-46.3-35-63.3c-11.3-16.9-64.3-44.2-92.5-55.3c-20.8-8.2-37.8-2.7-56.1,1.1c28.3,3.3,75.7,16.7,88.3,27 c2,1.6,4.9,5.1,8.4,9.7c0.1,0.1,0.2,0.3,0.3,0.4c11.9,4.1,21.4,9,33.3,22c3,3.2,5.9,6.5,9,9.6c2.2,2.2,4.9,3.7,7.1,5.9 c6,6.1,11.9,12.2,17.9,18.4c2.1,2.1,2,3.5,2.1,4.2c0,0.7-0.3,1.9-1.2,1.1c-0.9-0.8-2.5-1.3-3.2-0.3c-0.8,1.5,0.8,3.6,2.3,5.6 c1.9,2.6,2.7,5.9,4.1,8.8c2.9,6.4,5.9,12.8,7.4,19.7c1.4,6.5,4.8,12.8,7.1,19.1c4.9,13.4,7.6,27.2,5.4,41.4 c-1.4,8.9-2.8,17.7-3.8,26.5c1.4-6.3,3.3-14,6.3-23.9C388.2,177.5,378.8,173.8,373,126.8';
        let p2 = "M37,262.8c-1.2-3.1-2.8-6-4.3-9c-0.3-0.6-0.6-1.2-1-1.9 c-4.6-9-8.8-18.3-11.3-28c-2.8-10.4-3.6-21.5-1.1-32c1.9-7.8,5.6-15,8.4-22.5c4.6-12.6,6.1-26.1,10.1-38.9 c1.9-6.2,4.5-9.5,7.4-15c3-5.5,7.1-10.3,11.2-15.2C66.5,88,78.2,77.2,91.2,68c3-2.1,6.1-4.7,9.6-5.9c2.9-1,5.2-0.8,8-2.5 c6.1-3.7,9.4-10.5,15.6-14C132.6,41,141.5,32.6,151,31c3.8-0.7,7.1-0.3,10.9-1.4c5.3-1.6,10.4-3.7,15.8-5.2 c2.5-0.7,4.8-1.9,7.4-1.9c5.3-0.1,10.8,1.2,16.1,0.7c5.8-0.6,11.5-3.2,17.4-4c0.6-0.1,1.3-0.1,1.7,0.4c0.4,0.6,0,1.3-0.4,1.8 c-1.7,2.3-3.3,5.5-1.5,7.6c1,1.3,2.9,1.5,4.5,1.5c6.2-0.1,12.6-2.3,18.7-0.4c3.3,1,7,1,10.4,1.4c3.8,0.5,7.7,0.9,11.5,1.4 c0.7,0.1,1.5,0.2,2.2,0.5c0.7,0.4,1.2,1.1,1.1,1.8c-0.1,1.2-1.7,1.8-2,3c-0.2,0.9,0.4,1.8,1.2,2.2c4.2,2.3,10.1,3,14.8,4.3 c0.2,0,0.3,0.1,0.5,0.2c0.5,0.1,0.8,0.2,1,0.2c1.4,0.4,2.7,0.9,4,1.3c-0.1-0.1-0.2-0.3-0.3-0.4c-3.5-4.6-6.4-8.1-8.4-9.7 C263.9,25,208,9.9,181.6,8.6C155.3,7.4,127.5,20,96.1,31.9c-31.4,11.9-47,44.4-69,65.9C5,119.2,4.8,163,7.1,185.4 c1,9.9,5.2,19.4,8.6,47.1c1.7,14,7.4,24.3,15.7,35.4c3.4,4.5,6.9,8.9,9.9,13.7C40,275.2,39.5,268.8,37,262.8";
        let p3 = "M372.1,160.6c-2.3-6.3-5.7-12.6-7.1-19.1c-1.5-6.9-4.4-13.3-7.4-19.7 c-1.4-2.9-2.1-6.2-4.1-8.8c-1.5-2-3-4-2.3-5.6c0.7-1,2.3-0.6,3.2,0.3c0.9,0.8,1.2-0.4,1.2-1.1c0-0.7,0-2.1-2.1-4.2 c-6-6.1-11.9-12.2-17.9-18.4c-2.2-2.3-4.9-3.7-7.1-5.9c-3.1-3.1-6-6.4-9-9.6C306.5,54,296.2,49.5,282.3,45 c-0.2-0.1-0.5-0.1-1-0.2c6.9,2,6.1,5.2,9.3,10.5c3.6,5.9,11.6,11.1,17,15.3c3.4,2.7,6.9,5.3,9.9,8.5c4.7,5,6.9,11.3,10.1,17.2c1.2,2.3,1.5,5.1,3.3,6.9c1.9,1.9,5.2,2.2,6.6,4.5c1.5,2.4-0.1,5.5,0.1,8.3c0.3,5.7,24.6,21.7,8.5,27.2 c-0.4,0.1-0.8,0.2-1.1,0.6c-0.3,0.4-0.3,0.9-0.2,1.4c0.5,4.1,3.8,7.3,6.4,10.6c5.1,6.4,7.5,14,8.1,22c0.2,2.4-0.2,16.2-3,20 c-0.4,0.6-0.2,0.9,0.4,1.1c2.4,0.6,5.2,2.7,5,4.6c-0.6,5.7-4.2,10.8-4.8,16.4c-1,8.7,5,17.3,3.1,25.9 c-1.6,7.4-8.9,13.2-8.9,20.8c0,1.8,0.4,3.8-0.4,5.4c-0.8,1.6-2.5,2.4-4,3.3c-8.4,5.1-12.3,15.1-19.8,21.5 c-4.3,3.7-9.7,6-14.3,9.4c-5.4,3.9-12.5,15.3-19.3,15.7c-2.3,0.2-4.6-0.9-6.9-1.2c-3.6-0.4-7,1.2-10.2,2.8 c-6.6,3.2-13.1,4.6-19.8,7.3c-7.3,3-14.2,8.8-20.6,13.3c-13.3,9.4-26.6,19.2-42.2,24.6c-2.3,0.8-5.7,1-6.5-1.3 c-0.9-2.7,3.3-4.6,3.7-7.5c-2.5-0.5-4.6,1.5-6.7,3c-4.2,3-9.6,3.7-14.8,4c-9.6,0.5-19.9-0.1-29.3-2.7 c-5.6-1.6-10.7-3.1-15.5-6.4c-11.5-7.9-24.7-11.3-35-21.1c-1.3-1.3-2.9-2.5-4.7-3.8c0.7,1,1.4,2,2,3 c21.4,31.3,59.7,34.6,82.1,36.8c10,0.9,20.1-1.3,47.9,0.8c27.8,2.1,29.4-7.7,73.5-23.4c16.6-5.9,32.2-14.1,41.7-29.5 c5.2-8.4,10.4-16.8,15.4-25.4c2.3-3.9,5-7.7,7-11.7c1.9-3.7,5.4-10.1,7-8.9c0.8,0.5,0.4,2.6,1.2,3.1c0.4,0.3,0.9-0.2,1.2-0.6 c6.6-10.2,7.2-20.5,8-32.6c1-14.6,3.2-28.3,5.5-42.6C379.7,187.7,377,173.9,372.1,160.6";
        let p4 = "M55.7,175.5c-0.5,3.6-0.8,7.2-0.9,10.8c-0.6,13.6-0.8,27-0.7,40.5c0,2-1.2,2-1.7,1.7c-1.5-0.9-2.6-2.4-3.1-4.1c-1.8-5.6-1.7-12.4-3.3-18.4c-1.8-7-3.2-14.2-3.7-21.5c-1.1-13.4,0.2-27.3,6-39.6 c2.2-4.7,5.5-8.7,8.9-12.6c4.3-4.9,8.8-9.7,13.4-14.3c2.9-2.8,6.8-9.4,10.7-11.1c0.8-0.4,0.9,0,1,0.2c0.3,3.5-3,5.5-3.7,8.9 c-0.3,1.6,0,3.2,0,4.8c0.3,10-11.9,17.4-15.6,26.3C59.2,156.2,57,165.8,55.7,175.5 M90.9,97.1c0.9,1.2,4.4-0.8,5.4-1.3 c1.5-0.9,2-2.1,2.8-3.4c0.6-1.1,1.4-2.1,2-3.1c0.8-1.1,1.5-2.2,2.3-3.3c0.2-0.3,0.5-0.9,0.3-1.1c-0.2-0.2-1,0.4-1.5,0.7 c-1.5,0.9-3.2,1.6-4.8,2.4c-3.4,1.6-6.3,3.2-6.8,7.2c-0.1,0.5-0.1,1.1,0.1,1.6C90.7,96.8,90.8,97,90.9,97.1 M330.7,183.5 c-0.1,2.6,0.2,5.8,2.7,6.6c2.7,0.9,2.4-27.5,2-29.9c-0.8-4-1.5-7.9-2-11.9c-0.6-4.6-3.3-7.9-5-12c-1.6-3.8-3.3-7.5-5.7-10.9 c-1.7-2.5-3.8-5-3.8-7.9c0-1.1,0.3-2.3,0.3-3.4c0-6.5-9.4-9.1-11.4-15c-1.1-3.4-1.3-6-3.8-8.9c-3.5-4.2-8.4-8.3-12.8-11.5 c-4.7-3.5-12.6-4-18.2-5c-1.8-0.3-3.9-0.5-5.2,0.8c2,2.8,5.2,4.5,8.1,6.3c6.2,3.9,11.7,8.8,16.2,14.5 c4.6,5.8,7.5,12.7,12.4,18.2c5.7,6.5,10.7,13.4,14.8,21.1c1.3,2.4,2.4,4.9,3.5,7.4C328.3,155.1,331.1,169.3,330.7,183.5 M324.8,258.1c-0.6,1.5-1,3-0.8,4.6c0.1,1.2,0.6,2.4,0.7,3.7c0.4,2.8-1.1,4.6-2.1,7.1c-1.7,4-3.9,7.7-6.1,11.5 c0.6,0.3,1.2-0.2,1.6-0.7c3.8-4.5,7.7-9,11-13.9c1.9-2.9,3.4-6.1,4.6-9.3c1.9-5.1,0.6-10.9,2.7-15.7c0.5-1.2,0.6-2.9-1-2 c-1.1,0.6-1.7,2.4-2.5,3.4c-1.2,1.6-2.4,3.2-3.4,4.9c-1.1,1.8-2.7,3.2-3.8,5C325.3,257.1,325,257.6,324.8,258.1";
        return (
            <div className="background">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388.2 375.5" enable-background="new 0 0 388.2 375.5">
                    <g>
                        <path clip-path="url(#SVGID_2_)" fill="#B1D78A" d={p1}></path>
                        <path clip-path="url(#SVGID_2_)" fill="#46A8C6" d={p2}></path>
                        <path clip-path="url(#SVGID_2_)" fill="#0F7BB6" d={p3}></path>
                        <path clip-path="url(#SVGID_2_)" fill="#7FA9C8" d={p4}></path> */}
                    </g>
                </svg>
            </div>
        );
    }
}
