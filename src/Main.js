
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
export default class Main extends Component 
{

    constructor(props)
    {
        super();

        this.state = 
        {
            screenOrientation: "",
            width: "100%",
            height: "auto"
        };

        this.setScreenOrientation = this.setScreenOrientation.bind(this);
    }

    componentDidMount() {
        this.setScreenOrientation();
        window.addEventListener('resize', this.setScreenOrientation);
    }


    setScreenOrientation = () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.setState({
                screenOrientation: 'portrait',
                width: window.innerWidth,
                height: "auto"
            });
        }

        if (window.matchMedia("(orientation: landscape)").matches) {
            this.setState({
                screenOrientation: 'landscape',
                width: "auto",
                height: window.innerHeight
            });
        }

    }

    render()
    {
        return(
        <div style={{backgroundColor: "black", width: "100%", height: "100%"}}>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures1.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures2.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures3.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures4.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures5.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures6.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures7.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures8.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures9.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
                <Grid item>
                    <img src={process.env.PUBLIC_URL + "/image/brochures10.jpg"} width={this.state.width} height={this.state.height} />
                </Grid>
            </Grid>
        </div>
        )
    }
}