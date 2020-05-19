import React from 'react';

class Timer extends React.Component {
      constructor() {
            super();

            this.state = {
                  isSession: true,
                  timerSecond: 0,
                  intervalID: 0,
            };
            this.play = this.play.bind(this);
            this.decreaseTimer = this.decreaseTimer.bind(this);
            this.stop = this.stop.bind(this);
            this.reset = this.reset.bind(this);


      }
      play() {
            let intervalID = setInterval(this.decreaseTimer, 1000);
            this.props.onPlayer(true);
            this.setState({
                  intervalId: intervalID
            })
      }
      decreaseTimer() {
            switch (this.state.timerSecond) {
                  case 0:
                        if (this.props.timerMinute === 0) {
                              if (this.state.isSession) {
                                    this.setState({
                                          isSession: false
                                    });

                                    this.props.onToggleInterval(this.state.isSession);

                              } else {
                                    this.setState({
                                          isSession: true
                                    });
                                    this.props.onToggleInterval(this.state.isSession);
                              }
                        } else {
                              this.props.onUpdateTimerMinute()
                              this.setState({
                                    timerSecond: 59
                              })
                        }

                        break;
                  default:
                        this.setState((prevState) => {
                              return {
                                    timerSecond: prevState.timerSecond - 1
                              }
                        })
                        break;
            }
      }
      stop() {
            clearInterval(this.state.intervalId)

      }
      reset() {
            this.stop();
            this.props.onReset();
            this.setState({
                  timerSecond: 0,
                  isSession: true
            })

      }


      render() {
            return (
                  <section>
                        <section className="timer-container">
                              <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                              <span className="timer">{this.props.timerMinute}</span>
                              <span className="timer">:</span>
                              <span className="timer">{this.state.timerSecond === 0
                                    ? '00'
                                    : this.state.timerSecond < 10
                                          ? "0" + this.state.timerSecond
                                          : this.state.timerSecond}
                              </span>


                        </section>
                        <section className="timer-actions">
                              <button onClick={this.play}>Play</button>
                              <button onClick={this.stop}>Stop</button>
                              <button onClick={this.reset}>Refresh</button>
                        </section>
                  </section>

            )
      }


}

export default Timer;