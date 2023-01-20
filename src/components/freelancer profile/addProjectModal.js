import React, {useState, useEffect} from 'react'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import './styleFrlProf.scss'
import { BaseUrl, token } from '../../API/POST';
import axios from "axios";


const AddProjectModal = ({modal, toggle}) => {

  const [imgs, setImgs] = useState([])
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [tools, setTools] = useState('')
  const [link, setLink] = useState('')

  const postImgs=(e)=>{

    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setImgs([...imgs, e.target.result]);
    }
  }

  const deleteImg=(index)=>{
    setImgs(imgs.filter((el, i) => i !== index))
  }

  const closeModal=()=>{
    setImgs([])
    setTitle('')
    setDescr('')
    setTools('')
    setLink('')

    toggle()
  }

  const postData = async()=>{
    const formData = new FormData()
    // formData.append('Project', '')
    formData.append('ProjectImages', imgs)
    formData.append('Title', title)
    formData.append('Description', descr)
    formData.append('Tools', tools)
    formData.append('Link', link)

    try {
       const post =  await axios({
            method: 'post',
            url: `${BaseUrl}api/Project`,
            data: formData,
            headers:{
                "Content-Type" : "multipart/form-data",
                "Authorization" : `Bearer ${token}`
            }
        })
        
        if (post.status === 200) {
            toggle()
        }else{
            alert(post.statusText)
        }
       
    } catch (error) {
        alert(error);
    }
  }
  useEffect(()=>{

  },[imgs])
  return (
    <Modal isOpen={modal} toggle={toggle} className='addProjectModal'>
        <ModalBody>
          <div className='addProjDiv'>
              <p className='addPortTitle'>Add portfolio project</p>
              <label className='dropPics form-control' htmlFor='proPics'>Drag and drop or Browse</label>
              <input type={'file'} id='proPics' onChange={postImgs}/>
              <div className='mappedImages'>
              {imgs.map((item,index)=>{
                  return(
                    <span className='spanClass' key={index}>
                      <p className='delImg' onClick={()=>deleteImg(index)}>x</p>
                      <img src={item}/>
                    </span>
                      )
              })}
              </div>
          </div>
          <div className='addProjDiv'>
              <p className='miniTitle'>Project Title</p>
              <input onChange={(e)=>setTitle(e.target.value)} type={'text'} className='form-control' placeholder='Enter a brief but descriptive title'/>
          </div>

          <div className='addProjDiv'>
              <p className='miniTitle'>Description</p>
              <textarea onChange={(e)=>setDescr(e.target.value)} type={'text'} className='form-control addPortDesc' placeholder='Describe your project to a buyers'/>
          </div>

          <div className='addProjDiv'>
              <p className='miniTitle'>Tools</p>
              <input onChange={(e)=>setTools(e.target.value)} type={'text'} className='form-control' placeholder='Choose or write the tools that you used'/>
          </div>

          <div className='addProjDiv'>
              <p className='miniTitle'>Link</p>
              <input onChange={(e)=>setLink(e.target.value)} type={'text'} className='form-control' placeholder='Provide a link to your project'/>
          </div>


        </ModalBody>

        <ModalFooter>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={postData}>Save</Button>
        </ModalFooter>
    </Modal>
  )
}

export default AddProjectModal