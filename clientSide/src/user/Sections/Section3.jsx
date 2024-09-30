
import angular from '../../../public/images/technologies/angular.png'
import js from '../../../public/images/technologies/js.png'
import next from '../../../public/images/technologies/nextjs.png'
import nest from '../../../public/images/technologies/nestjs.png'
import bootstrap from '../../../public/images/technologies/bootstrap.png'
import c1 from '../../../public/images/technologies/csharp.png'
import html from '../../../public/images/technologies/html.png'
import css from '../../../public/images/technologies/css.png'
import figma from '../../../public/images/technologies/figma.png'
import postgresql from '../../../public/images/technologies/postgresql.png'
import tailwind from '../../../public/images/technologies/tailwind.png'
import firebase from '../../../public/images/technologies/firebase.png'
import express from '../../../public/images/technologies/express.png'
import mongoose from '../../../public/images/technologies/mongoose.jpg'
import node from '../../../public/images/technologies/nodejs.png'
import react from '../../../public/images/technologies/react.png'
import googleCloud from '../../../public/images/technologies/googlecloud.png'
import php from '../../../public/images/technologies/php.png'
import vsCode from '../../../public/images/technologies/vscode.png'
import typescript from '../../../public/images/technologies/typescript.png'
const technology = [
    {
        technology:'js',
        technologyImage:js
    }, {
        technology:'angular',
        technologyImage:angular
    }, {
        technology:'next',
        technologyImage:next
    }, {
        technology:'nest',
        technologyImage:nest
    }, {
        technology:'bootstrap',
        technologyImage:bootstrap
    }, {
        technology:'csharp',
        technologyImage:c1
    }, {
        technology:'html',
        technologyImage:html
    }, {
        technology:'css',
        technologyImage:css
    }, {
        technology:'figma',
        technologyImage:figma
    }, {
        technology:'postgresql',
        technologyImage:postgresql
    }, {
        technology:'tailwind',
        technologyImage:tailwind
    }, {
        technology:'firebase',
        technologyImage:firebase
    }, {
        technology:'express',
        technologyImage:express
    }, {
        technology:'mongoose',
        technologyImage:mongoose
    }, {
        technology:'node',
        technologyImage:node
    }, {
        technology:'react',
        technologyImage:react
    }, {
        technology:'googleCloud',
        technologyImage:googleCloud
    }, {
        technology:'php',
        technologyImage:php
    }, {
        technology:'vsCode',
        technologyImage:vsCode
    }
    , {
        technology:'typescript',
        technologyImage:typescript
    }


]
const Section3 = () => {
    
    return (
        
        <div className='md:pl-16 lg:pl-16'>
           
            <div className=' mt-16 mb-16'>
                <h2 className='text-4xl text-black font-bold  flex lg:justify-start md:justify-start  justify-center'>
                Technologies We Use</h2>
                <p className='text-2xl text-black mt-6 ml-4 md:ml-0 lg:ml-0'>To provide your company with top-notch software solutions, we <br/> <span className='mt-2'>bring together cutting-edge technologies and knowledgeable resources.</span></p>  
            </div>
            
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-32 mb-16'>
              {
                technology.map((param,idx)=><div key={idx}>
                     <img src={param.technologyImage} alt="Logo" className='w-28 h-16 md:w-32 lg:w-40 lg:h-16 mb-4' /> 
                </div>)
                          
              }
            </div>

        </div>
    );
};

export default Section3;