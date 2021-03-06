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
            1: 'Who developed Python Programming Language?',
            2: 'Which type of Programming does Python support?',
            3: 'Which of the following is the correct extension of the Python file?',
            4: 'What will be the value of the following Python expression?',
            5: 'Which of the following is used to define a block of code in Python language?',
            6: 'Which of the following is the truncation division operator in Python?',
            7: 'Which function is used to display numbers and text on the screen?',
            8: 'How do you insert comment in python code?',
            9: 'Which keyword is used to define function in Python language?',
            10: 'Data type that can only be true or false?',
        },
        answers: {
            1: {
                1: 'Wick van Rossum',
                2: 'Rasmus Lerdorf',
                3: 'Guido van Rossum',
                4:'Niene Stom'
            },
            2: {
                1: 'object-oriented programming',
                2: 'structured programming',
                3: 'functional programming',
                4:'all of the mentioned'
            },
            3: {
                1: '.python',
                2: '.pl',
                3: '.py',
                4: '.p'
            },
            4: {
                1: '7',
                2: '2',
                3: '4',
                4: '1'
            },
            5: {
                1: 'Indentation',
                2: 'Key',
                3: 'Brackets',
                4: 'All of the mentioned'
            },
            6: {
                1: '|',
                2: '//',
                3: '/',
                4: '%'
            },
            7: {
                1: 'Print()',
                2: 'Input()',
                3: 'Output()',
                4: 'none of these'
            },
            8: {
                1: '// This is a comment',
                2: '# This is a comment',
                3: '/* This is a comment */',
                4: '// This is a comment  //'
            },
            9: {
                1: 'Function',
                2: 'Def',
                3: 'Fun',
                4: 'Fundef'
            },
            10: {
                1: 'int',
                2: 'string',
                3: 'boolean',
                4: 'float'
            }
        },
        correctAnswers: {
            1: '3',
            2: '4',
            3: '3',
            4: '1',
            5: '1',
            6: '2',
            7: '1',
            8: '2',
            9: '1',
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
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score,name } = this.state;
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