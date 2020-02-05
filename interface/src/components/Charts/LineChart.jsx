import React, { Component } from 'react';
import Donut from './Donut';
import { Line } from 'react-chartjs-2';
import * as api from '../../api';
import { lineManipulator } from '../../utils/dataUtils';

class LineChart extends Component {
  getState = username => {
    api.getEmotions(username, '09:00:00').then(({ data }) => {
      const emotionRefObj = lineManipulator(data);
      this.setState({
        data: {
          labels: [
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00'
          ],
          datasets: [
            {
              label: 'neutral 😐',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'green',
              borderColor: 'green',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'black',
              pointBackgroundColor: 'green',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'green',
              pointHoverBorderColor: 'green',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.neutral
            },
            {
              label: 'happy 😀',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'yellow',
              borderColor: 'yellow',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: 'yellow',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'yellow',
              pointHoverBorderColor: 'yellow',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.happy
            },
            {
              label: 'sad 🙁',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(133, 190, 212)',
              borderColor: 'rgba(133, 190, 212)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: 'rgba(133, 190, 212)',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(133, 190, 212)',
              pointHoverBorderColor: 'rgba(133, 190, 212)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.sad
            },
            {
              label: 'angry 😡',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'red',
              borderColor: 'red',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'red',
              pointBackgroundColor: 'red',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(133, 190, 212)',
              pointHoverBorderColor: 'rgba(133, 190, 212)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.angry
            },
            {
              label: 'fearful 😬',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'black',
              borderColor: 'black',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'red',
              pointBackgroundColor: 'red',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(133, 190, 212)',
              pointHoverBorderColor: 'rgba(133, 190, 212)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.fearful
            },
            {
              label: 'disgusted 🤢',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(48, 68, 36, 0.733)',
              borderColor: 'rgba(48, 68, 36, 0.733)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(48, 68, 36, 0.733)',
              pointBackgroundColor: 'rgba(48, 68, 36, 0.733)',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(133, 190, 212)',
              pointHoverBorderColor: 'rgba(133, 190, 212)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.disgusted
            },
            {
              label: 'surprised 😮',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'orange',
              borderColor: 'orange',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'orange',
              pointBackgroundColor: 'orange',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(133, 190, 212)',
              pointHoverBorderColor: 'rgba(133, 190, 212)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.surprised
            }
          ]
        }
      });
    });
  };

  selectTime = ({ target }) => {
    this.setState({ time: target.name });
  };

  componentDidMount() {
    const { username } = this.props;
    this.getState(username);
  }

  state = {
    data: {},
    buttonRef: {
      '09:00': '10:00',
      '10:00': '11:00',
      '11:00': '12:00',
      '12:00': '13:00',
      '13:00': '14:00',
      '14:00': '15:00',
      '15:00': '16:00',
      '16:00': '17:00'
    },
    time: undefined
  };

  render() {
    const { data, buttonRef, time } = this.state;
    const { username } = this.props;
    return (
      <div>
        <section>
          <h3 className="LineHead">
            <u>Your Day:</u>
          </h3>
          <Line data={data} />
        </section>
        <button onClick={this.selectTime}>All Day</button>
        {Object.keys(buttonRef).map(key => {
          return (
            <button
              onClick={this.selectTime}
              name={key}
            >{`${key} - ${buttonRef[key]}`}</button>
          );
        })}
        <Donut username={username} time={time} refObj={buttonRef} />
      </div>
    );
  }
}

export default LineChart;
