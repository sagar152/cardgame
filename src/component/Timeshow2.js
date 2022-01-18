
import React, { useState } from 'react'
import styles from '../component/qustionpage.module.css'
// import Answersheet from './answersheet'
// import Numbers from './Numbers'
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProgressBar from "./Progress";
import ProgressBar1 from './Progress1';
import points from '../images/points.webp'
import './exampleAnimation.css';
import music from '../images/music-on.svg';
import pause from '../images/pause.svg'
import ringer from './Ringer.mp3'
import boy from '../images/boy1.png'
import Quiz3 from './QuizMain3'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
// const testData = [
//   { bgcolor: "#6a1b9a", completed: 60 },
//   { bgcolor: "#00695c", completed: 30 },
//   { bgcolor: "#ef6c00", completed: 53 },
//   { transition: 'width 1s ease-in-out', }
// ];

function Timeshow2(props) {
  const audio = new Audio(ringer);
  audio.loop = true;
  const [state, setState] = useState(1);
  const [completed, setCompleted] = useState(100);
  // const [seconds, setSeconds] = React.useState(4);
  // const [sec, setSec] = React.useState(null)
  React.useEffect(() => {
    if (completed > 0) {
      setTimeout(() => setCompleted(completed - 10), 1000);
    } else {
      return null;
    }
  });
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setCompleted(completed - 1)}, 1000);
  //   // setTimeout(() => setCompleted((completed - 1), 2000);
  // }, []);
  // const loader = () => {
  //   return (
  //     <ReactLoading
  //       type={"spokes"}
  //       color={"#5433ff"}
  //       height={"4%"}
  //       width={"4%"}
  //     />
  //   );
  // };
  return (
    <div >
      <div className={styles.qustionpage}>
       
        <Container maxWidth="xl">
          <div >
            <Box sx={{ width: '80%' }} style={{ margin: '1px auto' }}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid md={6} xs={6}>
                  {/* <div style={{ display: 'inline' }}>
                    <div>  <h5
                      style={{
                        color: state === 10 ? "#e84118" : "white", marginTop: '40px'
                      }}
                    >
                      {state === 10
                        ? `completed`
                        : `Q${state}/10`}
                    </h5></div>
                    <div>
                      <ProgressBar1 width={state} /></div></div> */}
 
                </Grid>
                <Grid item md={6} xs={6} sx={{ justifyContent: 'space-between' }}><div style={{ position: 'absolute', right: '20px', top: '30px', color: 'black' }}><img src={points} alt='' style={{ width: '2rem' }} /><span style={{ fontWeight: '800', color: 'black', position: 'relative', bottom: '10px', paddingLeft: '10px' }}>Points</span></div></Grid>
                <Grid md={6} xs={12} sm={12} ><div style={{ padding: '50px 50px' }} className={styles.imagehide}><div style={{ width: '100%', height: '100%' }}><img src={boy} alt='' style={{ width: '100%', height: 'auto' }} /></div></div>
                  <div className={styles.imagehidedesktop}><div style={{ width: '100%', height: '100%' }}><img src={boy} alt='' style={{ width: '100%', height: 'auto' }} /></div></div>
                 </Grid>
                <Grid item md={6} xs={12} >
                  
                    
                      {/* <Grid item md={12} xs={12} style={{ paddingTop: '0' }}>
                        <Item style={{ backgroundColor: '#FFBB48', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0' }}>  <div className={styles.htmlstands}>
                          <h5 style={{ color: 'white', textAlign: 'center', width: '100%', paddingTop: '5%', fontSize: '2.25rem' }}>{props.question}</h5>
                        </div></Item>
                      </Grid> */}
                   
                   
                      
                        {/* <div className={styles.answersheetfourth} > */}
                        {/* <Numbers number='3' style={{ position: 'absolute', left: '70%' }} />
                          <Answersheet qustion='HyperText Markup Language' progress={state}
                            makeProgress={() => {
                              state < 10 ? setState(state + 1) : setState(0);
                            }} /> */}
                        <Quiz3 name={props.name}/>
                        {/* </div> */}
                      
                      
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                      <img src={music} alt=''
                        onClick={() => {
                          audio.loop = true;
                          audio.play();
                        }} style={{ marginLeft: '20px', cursor: 'pointer' }} />
                      <p>music on</p>
                    </div>
                    <div style={{ marginLeft: '20px' }}>   <img alt='' src={pause} onClick={() => {
                      audio.pause();
                    }} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                      <p>pause</p></div>

                  </div>

                </Grid>
              
              </Grid>
            </Box>
          </div>


        </Container>
        {/* <Timeshow  /> */}
      </div>
      <div> <ProgressBar /></div>
    </div>
  );
}

export default Timeshow2;