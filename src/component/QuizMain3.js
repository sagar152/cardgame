import React, {Component} from 'react';
import Question from './Qustion';
import Answer from './Answer';
import './QuizMain.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../component/qustionpage.module.css'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Certificate from "../images/certifiate.jpg";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Full form of HTML is',
            2: 'A "Container Tag" in HTML has _________',
            3: 'full form of URL',
            4: '404 http error is generated due to',
            5: 'HTML headings are defined with ',
            6: 'which of the following is used to read a HTML page',
            7: 'In which part of the HTML metadata is contained?',
            8: 'Which of the following tag is used to insert a line break in html page',
            9: 'Which of the following tag is used to create an ordered list',
            10: 'Which tag is used to display a picture in a html page.',
        },
        answers: {
            1: {
                1: 'Hyper Text Motion Language',
                2: 'Hyper Text Makeup Language',
                3: 'Hyper Text Markup Language',
                4: 'Higher text Markup Language'
            },
            2: {
                1: 'Only Ending Tag',
                2: 'Only Starting Tag',
                3: 'Both Starting and Ending Tag',
                4:'None of the above'
            },
            3: {
                1: 'Uniform Resource Locator',
                2: 'Uniform Research Locator',
                3: 'Universal Research Locator',
                4:'None of the above'

            },
            4: {
                1: 'Missing javascript file',
                2: 'Slow loading of page',
                3: 'Missing HTML file',
                4: 'None of the above'
            },
            5: {
                1: '<h11> to <h16>',
                2: '<h5> to <h10>',
                3: '<h1> to <h6>',
                4: '<h3> to <h8>'

            },
            6: {
                1: 'Web server',
                2: 'Web network',
                3: 'Web browser',
                4: 'Web sphere'


            },
            7: {
                1: 'Html tag',
                2: 'Body tag',
                3: 'Head tag',
                4: 'Title tag'
            },
            8: {
                1: '<a>',
                2: '<b>',
                3: '<br>',
                4: '<p>'

            },
            9: {
                1: '<tl>',
                2: '<ul>',
                3: '<ol>',
                4: '<li>'
            },
            10: {
                1: '<pic>',
                2: '<image>',
                3: '<img>',
                4: '<src>'
            }
        },
        correctAnswers: {
            1: '3',
            2: '3',
            3: '1',
            4: '3',
            5: '3',
            6: '3',
            7: '3',
            8: '3',
            9: '3',
           10: '3',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        name:this.props.name
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score ,name} = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<div>
                     <Box  sx={{ width: '100%' }} style={{ backgroundColor: '#F4F6F6', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop: '50px', paddingBottom: '50px' }}>
      <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}  sx={{
          display: 'flex',
          justifyContent: 'center',
         
          
        }}>
        <Grid item md={12} xs={12} style={{ paddingTop: '0' }} >
        <Item style={{ backgroundColor: '#FFBB48', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0' }}>  <div className={styles.htmlstands}>
                          <h5 style={{ color: 'white', textAlign: 'center', width: '100%', paddingTop: '5%', fontSize: '2.25rem' }} className='Qustion-step'> <Question
                            question={quiestions[step]}
                        /></h5>
                        </div></Item>
        </Grid>
        <Grid item xs={11}>
          <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
        </Grid>
      </Grid>
    </Box>
                       
                       
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </div>) : (
                         <Box sx={{ flexGrow: 1 }}>
                         <Grid container spacing={2}>
                           <Grid item xs={12}>
                           <div
                  className="finalPage"
                  style={{
                    backgroundColor: "white",
                    padding: "12px 12px",
                    borderRadius: "10px",
                    marginTop: "20%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <div style={{position:'relative'}} className='ceritficate'>
                    <img
                      src={Certificate}
                      id='image'
                      alt="certificate not found"
                      style={{ width: "100%", height: "auto" }}
                    />
      <div style={{position:'absolute',top: '40.5%',left: '46%'}}> 
       <h1 style={{color:'black'}}>
            {name.value}
                    </h1>
                    <p style={{color: 'black',fontWeight:'bold',position: 'relative',left:'60px',top:'-15px'}}>
                        {score} <span style={{fontSize:'9px'}}>Out of </span> {Object.keys(quiestions).length}
                    </p>
                    {/* <p>Thank you!</p> */}
                    </div>
                  </div> 
                  {console.log(name,'jsx')}
                  {/* <h1 style={{color:'black'}}>{name}</h1> */}
                  <Button
                    style={{
                      marginTop: "35px",
                      border: "2px solid green",
                      width: "30%",
                    }}
                  >
                    <Link
                      to="/"
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Back
                    </Link>
                  </Button>
                  <Button
                    style={{
                      marginTop: "35px",
                      border: "2px solid green",
                      width: "50%",
                      marginLeft: "20px",
                    }}
                    onClick={this.print}
                  >
                    <Link
                      to={`${Certificate}`}
                      target="_blank"
                      download
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                   Download Certificate
                    </Link>
                  </Button>
                  {/* <Link to="/files/myfile.pdf" >Download</Link> */}
                </div>
                           </Grid>
                           
                         </Grid>
                       </Box>
                       
                    )
                }
            </div>
        );
    }
}