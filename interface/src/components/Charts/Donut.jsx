import { Doughnut } from 'react-chartjs-2';
import React, { Component } from 'react';
import * as api from '../../api';
import donutManipulator from '../../utils/dataUtils';

class Donut extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      data: {
        labels: [
          'neutral 😐',
          'happy 😀',
          'sad 🙁',
          'angry 😡',
          'fearful 😬',
          'disgusted 🤢',
          'surprised 😮'
        ],
        datasets: [
          {
            data: data,
            backgroundColor: [
              'green',
              'yellow',
              'rgba(133, 190, 212)',
              'red',
              'black',
              'rgba(48, 68, 36, 0.733)',
              'orange'
            ],
            hoverBackgroundColor: [
              'green',
              'yellow',
              'rgba(133, 190, 212)',
              'red',
              'black',
              'rgba(48, 68, 36, 0.733)',
              'orange'
            ]
          }
        ]
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { time, username, refObj } = this.props;
    if (time !== prevProps.time) {
      api.getEmotions(username, time, refObj[time]).then(({ data }) => {
        this.setState({
          data: {
            labels: [
              'neutral 😐',
              'happy 😀',
              'sad 🙁',
              'angry 😡',
              'fearful 😬',
              'disgusted 🤢',
              'surprised 😮'
            ],
            datasets: [
              {
                data: donutManipulator(data),
                backgroundColor: [
                  'green',
                  'yellow',
                  'rgba(133, 190, 212)',
                  'red',
                  'black',
                  'rgba(48, 68, 36, 0.733)',
                  'orange'
                ],
                hoverBackgroundColor: [
                  'green',
                  'yellow',
                  'rgba(133, 190, 212)',
                  'red',
                  'black',
                  'rgba(48, 68, 36, 0.733)',
                  'orange'
                ]
              }
            ]
          }
        });
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <section>
        <h3 className="DoughnutHead">
          <u>Emotional Ratio</u>
        </h3>
        <Doughnut
          data={data}
          options={{
            legend: {
              labels: {
                fontColor: 'Blue'
              }
            }
          }}
        />
      </section>
    );
  }
}

export default Donut;
