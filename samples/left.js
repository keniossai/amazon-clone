// Copyright 2021 mac
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { MenuOutlined } from '@material-ui/icons'
import React from 'react'
import './SubHeader.css'

function SubHeader() {
    return (
        <div className="subHeader">
            <div className='subHeaderOption'>
                <MenuOutlined />
                <span className='subHeaderOptionOne'>All</span>
            </div>
            <div className='subHeaderOption'>
                <span className='subHeaderOptionOne'>Today's Deal</span>
            </div>
            <div className='subHeaderOption'>
                <span className='subHeaderOptionOne'>Customer Service</span>
            </div>
            <div className='subHeaderOption'>
                <span className='subHeaderOptionOne'>Gift Card</span>
            </div>
            <div className='subHeaderOption'>
                <span className='subHeaderOptionOne'>Registry</span>
            </div>
            <div className='subHeaderOption'>
                <span className='subHeaderOptionOne'>Registry</span>
            </div>
        </div>
    )
}

export default SubHeader
