import React from 'react';

function BreakInterval(props) {
      function decreseCounter() {
            if (props.breakInterval === 1) {
                  return;
            }
            props.decreaseBreak();
      }
      function increaseCounter() {
            if (props.breakInterval === 60) {
                  return;
            }
            props.increaseBreak();
      }
      return (
            <section>
                  <h4>Pause</h4>
                  <section className="interval-container">
                        <button
                              disabled={props.isPlay === true ? "disabled" : ""}
                              onClick={decreseCounter}

                        >
                              Down</button>
                        <p className="interval-length">{props.breakInterval}</p>
                        <button
                              disabled={props.isPlay === true ? "disabled" : ""}
                              onClick={increaseCounter}
                        >Up</button>
                  </section>
            </section>

      )
}

export default BreakInterval;