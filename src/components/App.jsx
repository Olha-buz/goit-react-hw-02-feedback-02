import React, { Component } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/feedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';


class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = optionKey => {
    this.setState({ [optionKey]: this.state[optionKey] + 1 });
  };
  
  countTotalFeedback = () => {
    const values = Object.values({ ...this.state });
    
    const total = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(1);
  };


  render() {
    const options = Object.keys(this.state);
    // console.log(options);
    const { good, neutral, bad } = this.state;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        border: '1px solid #656565',
        height: 'inline',
        width: 'inline',
        margin: 'auto'
      }}
    >
      <Section title='Please leave feedback'>
       <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
      </Section>

      <Section title='Statistics'>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        ) : (
            <Notification message='There is no feedback' />
        )}
      </Section>

    </div>

  );
    }
};

export default App;


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


