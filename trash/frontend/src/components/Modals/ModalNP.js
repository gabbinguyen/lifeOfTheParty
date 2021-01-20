// import React, { useState, useEffect } from 'react';
// import { Dropdown } from 'primereact/dropdown';

// import './ModalNP.css';
// import { ReactComponent as XIcon } from '../icons/x-icon.svg';

// const ModalNP = props => {
//   const token = localStorage.getItem('token');

//   const [newProjectName, setNewProjectName] = useState('');
//   const [newProjectDesc, setNewProjectDesc] = useState('');

//   const [banners, setBanners] = useState([]);
//   const [banner, setBanner] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:3000/banners', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(res => res.json())
//       .then(banners => {
//         setBanners(banners);
//         setBanner(banners[24]);
//       });
//   }, []);

//   const handleCreateProjectClick = () => {
//     const projectData = {
//       name: newProjectName,
//       description: newProjectDesc,
//       banner: banner
//     };
//     props.createNewProject(projectData);
//     props.modalClose();
//   };

//   const selectedBannerTemplate = (option, props) => {
//     if (option) {
//       return (
//         <div className='selected-banner-option-wrapper'>
//           <img src={option.banner_url} alt={option.banner_url} />
//         </div>
//       );
//     }

//     return <span>{props.placeholder}</span>;
//   };

//   const BannerOptionTemplate = option => {
//     return (
//       <div className='banner-option-wrapper'>
//         <img src={option.banner_url} alt={option.banner_url} />
//       </div>
//     );
//   };

//   return (
//     <div className='modal-window-overlay'>
//       <div className='modal-np'>
//         <div className='modal-close-wrapper-np' onClick={props.modalClose}>
//           <XIcon />
//         </div>
//         <div className='modal-np-header'>
//           <h3>New Project</h3>
//         </div>
//         <div className='modal-np-project-name modal-np-section'>
//           <h4>Name</h4>
//           <input
//             type='text'
//             placeholder='e.g. Project X'
//             defaultValue={newProjectName}
//             onChange={e => setNewProjectName(e.target.value)}
//           />
//         </div>
//         <div className='modal-np-project-description modal-np-section'>
//           <h4>Description</h4>
//           <textarea
//             placeholder='(Optional) Description'
//             defaultValue={newProjectDesc}
//             onChange={e => setNewProjectDesc(e.target.value)}
//           />
//         </div>
//         <div className='modal-np-project-banner-picker modal-np-section'>
//           <Dropdown
//             showClear
//             scrollHeight='400px'
//             placeholder='Choose a Banner'
//             optionLabel='banner_url'
//             optionValue='banner_url'
//             options={banners}
//             value={banner}
//             onChange={e => setBanner(e.value)}
//             valueTemplate={selectedBannerTemplate}
//             itemTemplate={BannerOptionTemplate}
//           />
//         </div>
//         <button
//           disabled={newProjectName !== '' ? false : true}
//           onClick={handleCreateProjectClick}
//         >
//           Create Project
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ModalNP;
