import React, { Component } from 'react';
import {Image, Carousel, Button} from 'antd';

import './Home.style.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                'https://i.picsum.photos/id/686/400/300.jpg?hmac=oAVbw54ATKxQ03Q6wQRyXuaVqLWnPztJ3YrTa2_RPjE',
                'https://i.picsum.photos/id/172/400/300.jpg?hmac=LMDUT1skC1n4kpzNYaZWpldHKugs81t3dvBbTXonuH0',
                'https://i.picsum.photos/id/635/400/300.jpg?hmac=uJQKHc07rwWNYoJJr8GFWOiTuvWdD2DgfMUiUT36Ek4',
                'https://i.picsum.photos/id/646/400/300.jpg?hmac=v8UJXPTCICwMtRC6Z40SI5oo5emasmYMifcMCizkgGY',
                'https://i.picsum.photos/id/559/400/300.jpg?hmac=9QsD-cRrwGvrteLs1PpPXfPdF87-2BI4vxU_vqABZhY'
            ],
        }
    }
    render() {
        return (
            <div className='home'>
                <h1 className='header'>Home</h1>
                <p>{`here are some nice pictures before your work today :)`}</p>
                <Carousel autoplay ref='myCarousel'>
                    {
                        this.state.pictures.map(picture => 
                            <Image key={picture} src={picture} alt='this is a nice picrue, trust me'/>
                        )
                    }
                </Carousel>
                <div class='carousel-image-changer'>
                    <Button onClick={()=>this.refs.myCarousel.prev()} >previous image</Button>
                    <Button onClick={()=>this.refs.myCarousel.next()} >next image</Button>
                </div>
                <Image src='https://media.giphy.com/media/111ebonMs90YLu/giphy.gif' alt='thumbs up!'/>
            </div>
        )
    }
}
