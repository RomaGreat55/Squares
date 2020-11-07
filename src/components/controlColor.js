import React, { Component } from 'react'
import Tcolor from './tcolor'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class ControlColor extends Component {




  constructor(props) {
    super(props)
    let table = this.createArr()
    //console.log("table ", table)
    this.state = {
      AllBorder: table
    }
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

    for (let i = 0; i < n; i++) {
      str = str + ms[i]
    }

    return str

  }

  getTypeBorder = _ => {
    let rn1
    let result
    let ms = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'mixed', 'outset']
    rn1 = Math.floor(Math.random() * 10, 0)
    result = ms[rn1]
    return result
  }


  createArr = _ => {

    const lenRow = 12;
    const lenCol = 7;
    //console.log("createArr ")

    let tempAllBorder = []
    let aColor = [], wBorder = [], tBorder = [], cBorder = []
    let rowBgColor = [], rowWidth = [], rowType = [], rowColor = []
    for (let i = 0; i < lenCol; i++) {
      rowBgColor = []
      rowWidth = []
      rowType = []
      rowColor = []
      for (let j = 0; j < lenRow; j++) {
        rowBgColor.push(this.getRandomStr(3))
        rowColor.push(this.getRandomStr(3))
        rowWidth.push(this.getWithBorder(20))
        rowType.push(this.getTypeBorder())
      }
      aColor.push(rowBgColor)
      wBorder.push(rowWidth)
      tBorder.push(rowType)
      cBorder.push(rowColor)
    }
    let dataObj = []
    let oneRow = [], temp = []
    for (let i = 0; i < lenCol; i++) {
      oneRow = []
      temp = []
      for (let j = 0; j < lenRow; j++) {
        dataObj = []
        dataObj.push(aColor[i][j])
        dataObj.push(wBorder[i][j])
        dataObj.push(tBorder[i][j])
        dataObj.push(cBorder[i][j])
        if (i === 0) {
          //console.log("j ", j)
          //console.log("dataObj i = 0", dataObj)
        }
        //console.log("BEFORE oneRow ", [...oneRow])
        //console.log("BEFORE temo ", [...temp])
        oneRow.push(dataObj)
        temp.push(dataObj)
        //console.log("AFTER oneRow ", [...oneRow])
        //          console.log("AFTER temo ", [...temp])
      }
      //console.log("oneRow      ", [...oneRow])
      //console.log("i      ", i)
      tempAllBorder.push(oneRow)
      //console.log("010101")
    }
    //console.log("tempAllBorder ", tempAllBorder)
    return tempAllBorder

  }



  changeArr = async (arr) => {
    if ((arr) && (arr.length > 0)) {
      //console.log("this is changeArr 1111")
      return new Promise(resolve => {
        //console.log("this is changeArr 222222222222")
        let saveColor = arr[0][arr[0].length - 1][0]
        let newArr = [...arr]
        for (let i = arr[0].length - 1; i > 0; i--) {
          newArr[0][i][0] = arr[0][i - 1][0]
        }
        for (let i = 0; i < arr.length - 1; i++) {
          newArr[i][0][0] = arr[i + 1][0][0]
        }
        for (let i = 0; i < arr[0].length - 1; i++) {
          newArr[arr.length - 1][i][0] = arr[arr.length - 1][i + 1][0]
        }
        for (let i = arr.length - 1; i > 1; i--) {
          newArr[i][arr[0].length - 1][0] = arr[i - 1][arr[0].length - 1][0]
          //console.log(i)
          //console.log("arr.length - 1", arr.length - 1)

        }
        newArr[1][arr[0].length - 1][0] = saveColor
        return resolve(newArr)
      })
    }
    else
      return []
  }







  createRandArr = async () => {
    const { AllBorder } = this.state
    console.log("AllBorder ", AllBorder)
    await this.changeArr(AllBorder).then(newArr => {
      console.log("newArr await ins ", newArr)
      this.setState({ AllBorder: newArr })
    })
  }

  async componentDidMount() {
    let a = await this.createArr()
    await this.setState({ AllBorder: a })
    this.repeatRandArGenerate()
  }

  componentWillUnmount() {
    clearInterval(this.repeatRandArGenerate)
  }

  getWithBorder = (maxV) => {
    let str = ""
    let rn1
    rn1 = Math.floor(Math.random() * maxV + 1, 0).toString()
    str = rn1 + "px"
    return str
  }

  repeatRandArGenerate = () => {
    setInterval(this.createRandArr, 300)
    //    this.createRandArr()
  }

  render() {
    const { AllBorder } = this.state
    //console.log(" render AllBorder ", AllBorder)
    let forRender = <></>
    if (AllBorder) {
      forRender = (
        <Tcolor squareData={AllBorder} />
      )
    }


    return (
      <div>
        {forRender}

      </div>
    )
  }
}

export default ControlColor

