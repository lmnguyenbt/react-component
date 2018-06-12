import React, { component } from 'react';
import clockStyle from './container.scss';

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            deadDate: (new Date('June 30, 2018')).toString(),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
           this.getTime();
        }, 1);
    }

    getTime() {
        const time = Date.parse(new Date('June 30, 2018')) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({
            days, hours, minutes, seconds
        });
    }



    render() {
        return (
            <div>
                <div>Countdown to date: {this.state.deadDate}</div>

                <div id="countdown" class="countdownHolder">
                    <span class="countDays">
                        <span class="position">
                            <span class="digit static">{this.state.days}</span>
                        </span>
                    </span>

                    <span class="countDiv countDiv0"></span>

                    <span class="countHours">
                        <span class="position">
                            <span class="digit static">{this.state.hours}</span>
                        </span>
                    </span>

                    <span class="countDiv countDiv1"></span>

                    <span class="countMinutes">
                        <span class="position">
                            <span class="digit static">{this.state.minutes}</span>
                        </span>
                    </span>

                    <span class="countDiv countDiv2"></span>

                    <span class="countSeconds">
                        <span class="position">
                            <span class="digit static">{this.state.seconds}</span>
                        </span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Container;