import React from 'react';
import styled from 'styled-components';
import './Syt.css';

import { MDBIcon, MDBContainer, MDBBtn,Link,MDBInput,MDBRow,MDBCol } from 'mdbreact';

const SocialButtonsPage = () => {
    return (
        <div className="bg">
        
        <MDBContainer >
        <MDBBtn size="lg" social="fb" href="https://www.facebook.com/prasanthreddy.munagala">
        <div class='km'>
        <div><i class="fab fa-facebook-f fa-fw blue-text"></i>facebook</div>
        </div>
        </MDBBtn>
        <MDBBtn size="lg" social="tw" href='https://twitter.com/LOGIN' >
            <div class='km'>
            <div><i class="fab fa-twitter fa-fw blue-text"></i> twitter</div>
          </div>
        </MDBBtn> 
        <MDBBtn size="lg" social="li" href='https://www.linkedin.com/in/srinivas-reddy-aa2b7718b/'>
        <div class='km'>
        <div><i class="fab fa-linkedin fa-fw blue-text"></i> linkedin</div>
        </div>
        </MDBBtn>
        <MDBBtn size="lg" social="ins" href='https://www.linkedin.com/in/srinivas-reddy-aa2b7718b/'>
        <div class='km'>
        <div><i class="fab fa-instagram fa-fw pink-text"></i> instagram</div>
        </div>
        </MDBBtn>
        <MDBBtn size="lg" social="slack">
        <div class='km'>
        <div><i class="fab fa-slack-hash pr-1"></i> Slack</div>
        </div>
        </MDBBtn>
        <MDBBtn size="lg" social="git" href='https://github.com/Iamprashanth-1'>
        <div class='km'>
        <div><i class="fab fa-github pr-1"></i> Github</div>
        </div>
        </MDBBtn>
        <MDBBtn size="lg" social="email" href='https://gmail.com/'>
        <div class='km'>
        <div><i class="fas fa-envelope pr-1"></i> Email</div>
        </div>
        </MDBBtn>
        </MDBContainer>
        <div class='jk'>
      <MDBRow>
          <MDBCol md='6'>
              <form className='hoverable' style={{ padding: 38 }}>
                  <p className='h5 text-center mb-4'>Contact me using Email</p>
                  <div class='hu'>
                      <MDBInput
                          color='red'
                          label='Your Name'
                          icon='user'
                          group
                          type='text'
                          validate
                          error='wrong'
                          success='right'
                      />
                      <MDBInput
                          label='E-mail here'
                          icon='envelope'
                          group
                          type='email'
                          validate
                          error='wrong'
                          success='right'
                      />
                      <MDBInput
                          color='red'
                          label='Subject'
                          icon='tag'
                          group
                          type='text'
                          validate
                          error='wrong'
                          success='right'
                      />
                      <MDBInput
                          type='textarea'
                          rows='2'
                          label='Your message please...'
                          icon='pencil-alt'
                      />
                  </div>
                  <div class='huu'>
                      <MDBBtn>
                          <div class='huu'>
                          Send Now !!! <MDBIcon far icon='paper-plane' />
                          </div>
                      </MDBBtn>
                  </div>
              </form>
          </MDBCol>
      </MDBRow>
  
  </div>
  </div>
      
  );
}

export const Contact = () => (
    <SocialButtonsPage></SocialButtonsPage>
)
