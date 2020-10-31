import React, { Component } from 'react'
import Tcolor from './tcolor'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class ControlColor extends Component {

  state = {
    num: 1

  }

  getRandomStr = (n) => {
    let str = "#"
    let rn1
    let ms = []
    for (let i = 0; i < n; i++) {
      rn1 = Math.floor(Math.random() * 256, 0).toString(16).toUpperCase()
      if (rn1.length < 2) {
        rn1 = "0" + rn1
      }
      ms.push(rn1)
      }

      // let res = ms.map (item => {
      //   str = str + {{item}}
      // }

      for (let i = 0; i < n; i++) {
        str = str + ms[i]
      }
    
    return str
   
  }

  getTypeBorder = () => {
    let rn1
    let result
    let ms = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'mixed', 'outset']
    rn1 = Math.floor(Math.random() * 10, 0)
    result = ms[rn1]
    return result
    }


getWithBorder = (maxV) => {
  let str = ""
  let rn1
  rn1 = Math.floor(Math.random() * maxV + 1, 0).toString()
  str = rn1 + "px"
  return str
}




  render() {
    const lenRow = 12;
    const lenCol = 7;
    let aColor = [], wBorder = [], tBorder = [], cBorder = []
    let oneRow = [], rowWidth = [], rowType = [], rowColor = []
    


    for (let i = 0; i < lenCol; i++) {
      oneRow = []
      rowWidth = []
      rowType = []
      rowColor = []
      for (let j = 0; j < lenRow; j++) {
        oneRow.push(this.getRandomStr(3))
        rowColor.push(this.getRandomStr(3))
        rowWidth.push(this.getWithBorder(20))
        rowType.push(this.getTypeBorder())
      }
      aColor.push(oneRow)
      wBorder.push(rowWidth)
      tBorder.push(rowType)
      cBorder.push(rowColor)

    //   if (i == 3) {
    //   console.log("i : ", i)
    //   console.log('aColor: ' + aColor)
    //   console.log('wBorder: ' + wBorder)
    //   console.log('tBorder: ' + tBorder)
    //   console.log('cBorder: ' + cBorder)

    //   console.log('aColor[1]: ' + aColor[1])
    //   console.log('wBorder[1]: ' + wBorder[1])
    //   console.log('tBorder[1]: ' + tBorder[1])
    //   console.log('cBorder[1]: ' + cBorder[1])

    //   console.log('aColor[1, 2]: ' + aColor[1][2])
    //   console.log('wBorder[1, 2]: ' + wBorder[1][2])
    //   console.log('tBorder[1, 2]: ' + tBorder[1][2])
    //   console.log('cBorder[1, 2]: ' + cBorder[1][2])


    // }
    
    }

    let AllBorder = []
    let dataObj = []
    //console.log("wBorder : " , aColor)
    for (let i = 0; i < lenCol; i++) {
      oneRow = []
      for (let j = 0; j < lenRow; j++) {
        dataObj = []
        //let y = wBorder[i][j] + ' ' + tBorder[i][j] + ' ' +  cBorder[i][j]  
        // console.log("aColor[i, j] : " , aColor[i][j])
        // console.log("wBorder[i, j] : " , wBorder[i][j])
        // console.log("tBorder[i, j] : " , tBorder[i][j])
        // console.log("cBorder[i, j] : " , cBorder[i][j])
        //console.log ("yyyyyyyyy : ", y)
        dataObj.push(aColor[i][j])
        dataObj.push(wBorder[i][j])
        dataObj.push(tBorder[i][j])
        dataObj.push(cBorder[i][j])
        oneRow.push(dataObj)
      }
      //console.log("oneRow all : ", oneRow)
      AllBorder.push(oneRow)

      
    }

// console.log('AllBorder: ' + AllBorder)
// console.log('wBorder: ' + wBorder)
// console.log('tBorder: ' + tBorder)
// console.log('cBorder: ' + cBorder)

//console.log("AllBorder : ", AllBorder)


    return (
      <div>
        <Tcolor squareData = {AllBorder} />
        
      </div>
    )
  }
}

export default ControlColor

