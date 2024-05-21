import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Cards from '../components/Cards'
import { Icon } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { getData } from '../../redux/action'


function Booking() {

  const [length,setLength]=useState('')
  const dispatch=useDispatch()
  const mainData=useSelector((store)=>store.data.dataGet)
  

  console.log("Length__new",mainData)
  console.log("object")

const newData=mainData.map((item)=>{
  return item
})

console.log("NewData",newData.length)
console.log("object")
  
  const getDataOne=(data)=>{
    console.log("dt....",data) 
    setLength(data)
  }

  return (
    <View style={styles.container}>
    <View>
    <View style={styles.over} >
    <View style={styles.wraptxt}>
       <Text style={styles.goa}>GOA PACKAGES</Text>
        <Text style={styles.site}>Experience beaches and sunset</Text>
         <Text style={styles.siteOne}>Add Travel Date, 2 Adults, 1 Room</Text>
         </View>
       </View>
        <Image style={styles.img} source={{uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIWFRUVFhUVFRUYGBgXGBUVFRUWFhUSFRUYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAEgQAAEDAQQGBQkFBAkFAQAAAAEAAhEDBBIhMQVBUWFxgQYTIpGhFDJCUrHB0eHwU3KCkqIHI5PxFRYzQ2JjstLiJDSjwtNE/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACsRAAICAgEDAQcFAQAAAAAAAAABAhEDEiETMUFRBBQiYWKRsUJSodHw4f/aAAwDAQACEQMRAD8A5ArRCmtgIbF9AJCjCOWqN1bcGhABSCkGKbWLbG0IAItJiI2mjUqa2wdQlnYm3N3IdLBN2ioHNAGBGe9LsHUBTfjgnqW1IMgI/lc7krYyiWRfDZB5KDK05hKU3icUy1ozBSOVDqI7Ss4KsHWWndmNSrqTimXWmRdXHl3k1ydeNQihTqJKm6iwDft37E2KGEhR8kOaqtiTcStuIrEd9HFaDYXTGZzTgaDFosRWg6hKIGSrxmc0o0JuaommnTSUTSVFIk4iRpqBYnXU1E00ykI0IlqiWJw0lB1NOpE3ESLFA006aaiaaopEpQEixQLE4aagaaopEJQFbq1cTJprRpprJuIvdWI/VrEbF1OfdRhYGLoLXo/YEk6xHYvnVmTPr3iaK4MUuqTosq35Om6iBoJdUsFNOiiiMs5QeQPTEgxSaE75Odi06zpVmQekLtRGqQpIjKaPURumQFOVnUlNMYmaVJB5TdMTo0inKdI7E5Ro7k8LMMJMJHkGUaK1tNyZs1AnNMGljAIKzqXDNLsEbs1JMmigWalOuU9TbhiuiDObIJGzBBq02N84gcVY1AuG6X2G1VS4m62gB51+HZZtDQfGE/Yi5M6alWpOHZe08wqvT+l2WWmKhF5vWNY6NU4kryB1sqU3gCoTgLpBzaDgMfYuh01pB1SwtokgvdUZVPB7iY4AyOACZT5ISlZ6Z1zQwPdDZDSdxMYeKyhVY/FrgeC8stvSq0WsGnTpONINLXOE4iMXOMAA5ELtf2e6MfTpOLzLiRe2Axg0cB9BWTFOhdSUOrTpYo3E2xmhJ1NDNNPmmomkm2EcSvNNQNNWDqSG6kmUhXEQdSQ3U0+aaG6mqKRGUBI01C4njTQzTVFIjKAr1axNXFpNsLoXtSzNOpDo6Nac07dlTpshfOTwKqR9RD2h3yVdfo/OSRr6CeMhK62m/Ushc/TyR7MussX4OGbYTOSk2zgHFdlU0e0mQEnaNFCUu8vI/wAPgpm2G8JCC/Rx2LobNZjTMRgrHyZrhgobTvgZyiu5wtWwEakLyVdhXseohI19HkYxgmjlkNUX2Od6mEejTT5simyxnUE/VF1AskItOkXIooo9JkJuoK4mU7DHnGE46w0/XS4bJR2HHgqRmicosg2kG64QbbpVlJt57o2ZY8JzTVVk4kSuR6UdFqtreP3oZS1jEu4AZH3b1WOTwSlC1Ynaf2k0WkgtJg4RrGyDkVC3aYo6VY2jZ6tw3iajXdl1xoxuj0py54pfSnQBjGAWdzg93ZLj2icM5jAYZDNcdpaxWux1GE9h1LEOB5kg5OnX3LqhKL8nFkhJd1wV3SKwmjU6uC1ubZzBGBBMfWCSfaHdmTgBB9mPIpvTmknWkiqQA70g0QC4+lMyZxzVbSpTgcMcVakc9HoD6nXClSoNvU6TaT6sA3TUdi1rwDN1oxO8t2L0fQVnLKYBgCBgBAHBcf8As2NClSfVLwHGS8kw1oBIxMRGUKztPT2zB4DHSye0+Dj9xmZ4mBxTbGqjri1RLV5//XN5rF9yo5owbTBaGtHrOxlzjzjIDWb/AKPdKGVzdc6HE4A3W/ha2Z78c+CJjoLiy4jhq3cQsNCjqag6mnSxDcxHYFCZpoTqaeLENzEymI4CJpqJppwsUTTTqZNwE7ixNdWsTbi9MtGhEAWxSI1e9bavM3T7HraNdyQCOwITWjajNpnaO9Tnz5HjwTAUwFFtM7FMA7EvAbJtpArBTg4LQciNelcUxtmbdZ5xhLVrPqT1Oopkg5oPEmgLJJM599j3LTbKuj6ppzWhZGqXuzKe9epzb7KQclnVFdIbAw61E6MB1rP2afgy9qj5Od6hFpsgZBW9XRexCdYCNSHSmn2G60JeSofSIUCxWFdrtYVXpXSFKg0vrPDG7Sc9wGZPBZMbugzI2LjP2gaAq2oAMHZF4k5wM8G4S85D2hatvT0TdoWdz3Z9s9XhtuwTyMFNaF01bK7i94pUaDQbz7pBB+89xEZ4wFaLaolLV8HnWgOhlrdWH7rAHEPwa6NU7JjFXdi0JZXW51EmALM9zmOIllWWtIJ1wO1jqMmMV6BTtV9n7qs+pIi91QcyTr7IaSOBXkDOtNvEm5V60NdM5h4BLpzBGJnOFdSbdsg8cYqkdNpPoRVrtcabxSaIcynBAe4em5voyMhw5Q0N+z5zRNRwm8AR/hIBJG/Ejkrn9otOo6jLCXlkF7mfuy0YiSMTjjhIGC8/smkrS2OptdVpg9hzyTIBwAdIIww4p45OCU4JPseoUeh9ngAySBF6YO7mNutVel+hpbUp1LPLpcRUaYyulzXTtlsfiC5kdMdJ2YxXhzQWzfpjJ2TpZEjELquifTV1peaVRradUTAEkOAxwkbMVXbi0KoW6O7p0oA4BbuKsdWf6xQn1DtKn1CnRLYhDcqdzztKzykjWfBMpoDxFo4KBaq4W5w3ojLcT6Pim2JvGxstUS1aZXnVCneCO4HjB3VilfCxHcXQsrM4hoJURikn6QbdjWtWG04kl31wXjxl04cLk9eUHORYtKm1yWp1JyRA9V6iZLptdxpr0VtU7Um16K16G5tRsVipiruCTD1NrkeoDQcFQbFMOCVDlIOTLIBwGwQslLtciBydTE1C3lsOQZUgUdxXEMKh2qXWFLytyjuBwQDStsuU3vIm6CYXnug9E1LSTa60PqOa51KQLtO9hTDGnKAJ2yV6BpKyCtTdTJgOEHmgVGsoUcBDabcszAGAxzK5sibdvsXxtJUu55xpPRNm0ew1Kn76s8jq6ZPnOxlzz6okkncqPRlhtduqkVHEtJO6myfVYDdENnGJ3zir/RGjn2u01Kj+0bubsQOseQANwY14j/FOErurBo6nQZcptgZnilxy9PuVyRXkWs9FlmoxODGyTtgZlebaCszalustsAawVn1w1jW4AUmlrQSc3EYknwXedMal2y1MPOhhjDBxjPUua8n6hui8I/eiRlHWQD9blXqO6JOHFnemi0gyAZwPBeddMOgN6alATJxB9EbvDLftXpDVJbbyjUuzPDLMa1Nxs1c9ZTc0i6+XAXhBaHec0jLA4b13rehdJzqFemblSmKcuBwe0RgYwJiYPLJE6adHb7TVpNBc0tN3bLgHH8s98rptHULlJjccGtGJk5azr4odRv5MbSgLrEUGpZgrRzZ1oLqA2pW2MqKipQhCcyFcmyjahmwjaipsLSKUtW+sdtVx5Cxa8kZsVFkJuCKa87apNqxmrU0GbEra6ALSMpBEiJEjMTrT9QRwQmy2NcJDgQdYII71pcbS6CyJc6kwy7sYuuiTdF68JwhYm3RGpehfC1ynLMZ1oXkrdTUaiyPRwXHN32PShx3LSzVXDISnm1CcwqvrIyCJSrHWudxZXhli95GWKnRrTngq99oUfKN6HxA1RcB6FWtgaYSNKsZxOCFbKjc9a2z7AWNFqy3AmAME42oFQWOonhXS9SUXyCWJPsWfWqDLWCYCrn2hRo1A2Sg/aJXwDoccl0KimKqpfL8Cl6ekXB0g603vVC+6yZ0d9aNRVVltZJklWAfukJo+0pkZ4nF0wnWJbSNI1Kb2AwXAidk61K+ovq8lnmTRoxp2gdjsrKTbrAAMJ3wAJO3ABEc9DdUQ3VEI5UuEU0b7lX0rouq0BTAkuqUx+qZO4RPJVHT+mRZmVGjtUajHA5RjHthdLUMxuVV0kodZZqzdZY4ji3tDxCaOT40O4fDRb0rQHAOBwcA4cCJCIKq5fonbS+yUj6oLD+AkDwAVwKpRk3FtehlBNWPmqomolL52rd5DZjdMZNRaNRLFyjfR2ZtEMmqomqly9RLk6sVpDBqqBqpcvUb6oosR0GfUXLdMtOVLNTBplt5xIlxkgR5wZ6XxhdGSqDpN0ebaWS2G1MBewktB80ug4DOBnAxV4ROfI+ODy+p0itUma7iZMmAcTniVit6/QC03iGM7IMAl4xjXzzWLpWvocWsj0loUwFXC3P8Asx+b5IjbW/7Mfm+S4nA9RTLELYckBaqnqD8x/wBqkLU/7PxPthI8Y3UHlqBsSgtL/UHf8lLr3+oO8/BK4BUxqAtloOpAFR/2fifgjNL/AFPH5JHEopBGYalO+hQ/1B3n4LAX+qPzH/apuFjqYW8thyixr/VHf8kQMdsx4/JSljHWRGgNyKxoWhSds8Vlx2xSljYdkxulCuNHU2EQXclz4a7Z4o1K9wQx3CVtWc+XHsuGWVtc0HAqrqkKTy47O/5IRY71fH5JenKTsOOKiu5oFbD1oscPR8T8FhDvV8fkuiGFjvJFGzUQ3vWyx/qePyUTTf6nj8ldYWTeWJyPQt/VPtFlP928ubjJuzd9gYea6u8uK0hV8l0q1xGFZrQRPrdgY/eY0rsDUd9n4/JdU8Vvb1IRypKvQKHrL6CHVDlT/V8lLt/Z+PyWWAzzky5RvKJc/wCz8fks7XqePyTrCI8xsuUS5aJd6nj8lgJ1t8fknWIR5gVeuGguc4NAzJIAHMpWppeg0tDqrBf83HA8xgBxVZpfo1aLR59pF0EkNFOAP1Y4YSVWt6Bu12j/AMf/ACVo4kRlmZ2gKoNOdKG0HXGMNRwzgi63cSJM7lut0ftDqQom1ywNDf7MTAwxN6TzVf8A1IIzrSPuf8lRQSE6llbV6b2kklrWAahBMc5xWlaDok4YCuANnV/8ltEFg20dI5XKA3y7/aiilpAehQI4+4wrSlpayYYeDkwNMWPWP0uXM8n0l+n9RS0vLm//AJ6G4gtEeKYpC3gYWel/E+BVo3SNgzgflcjt0nY9w/C5K8n0jLG/3FI/+konqaPAOE95KlTtGkcjYqZj/MZy9Iq+GlrH6w7nfBT/AKRsnrDud8FN5PoGWN/uKahVt5ONlojLDrGAyMjrTItlsb59no/xmDukJ/y2xH0mnk5bbaLFqI/WEjmn+n/fcooSX6v99hRuk63pWelu/wCop++EKu+0uxFhou41WHuKtG2uyesP1qbLZZNrf1JN0v0/77h1l6lJQ8tZ5tgs7ZxMPZ7oRqVbSU/9vQgarwbhxkq2Npsm79akLVZN36kHkXp/H/TaS+Yo/wAtIg0KPN/zUKVO15GjQGeTh444p8Wuy7R3OW+vsuxv5T8FKU16DqMhJ1K1HA0qUbqjhzwcmrHYK84CjAGupVEcMSiCtZdje4/BNWO22Vhm63HDzfkpqUb5NJZK4RW+SWsHCpQA3VC7/U1Ap2G2Cf8AqafOpe8DTgK2qWmy+o38nyS7rRY/s2fwx8EIzS7GrI/H8CFShbc/KaA4R72ItBlpBl9eiRskY87ghHNex/ZM/hj4KLq1kjCmz+EPguiOX5C9ORM9brdT/PHf2EACr6VVp41G/wDyCpf6Qm1Gzts9meBS60Oczqz5waWZOxxmVbsrXR2rCI/y+qeO43T4K2yQOmzkf2i6Oc91Bwc30w5wdeutEETDRGJw3pD+vtRgDDVaS1uJ6sEkNkFx7ip9P9O03saKIADoAgBpIbJJw2kjkCvOOycSHf2bjN4YtLnTqzklduJbR5OWfwvg7o9OqsyK7vRMXGeni2JbrlWOhumtWtVp0r8lzyD2SIjMmCBAnPcV5w0tByOBbr10mTs1BdP+z+q2na24QC1zcr16Bec2ScMZx3b08lSsRfEes9cR/f0u4+2UKpVccrSzle9xWxpOkP7on8qmNKU/sSOTVHf5fj+hni+f5/sFfdqtPK64oFCgWn/uXmTPa62OAkqmGnqTbXaA9z2g9VcHagDqxewaYElJaf08RXs/VWktpucRVwBBjEA3xrywhUjPxX4Jywtc3+TrHVMcazed9vLBadbQ0FzqlOBrDnAAb5XLdJdKtfZnXatMlpZUF1jWuNxwMSKmIjMRiq3pBpllYXGMY1oMlzQWg7ARex4a+Uqi7diUmk0r5ZrT3S+t1hdRc4CIYxpOM4X3cTlK5K12ms8y99RzsyXOcNhJEnAZRzBxlI6Tc9tVwqZtJbhlry/CD3pjRVkFV4DyAPOukhjqoDu02mTheMuPMjCZDJUrHb5o7LRumbdVpteK9ngyO00z2SW447lpPto2B4Bu0hgBDoa4XRdulpxBERyW1HqfIt0/mVItBy7M8EYWk6wJWnRw4/IqbWiM47pRoFkm2mMwOMRPeiNtQ2eKh1QzBmfrFEZZxwPtQaQU2Z142CFLyker3iP5qF0D6C28jD5JdQqRNlsGzH62onl42fW+Slh9HBSdTG+eHxSuKGUmNeXbA06+XAFbNrjG6DOv+aE1g9U92B5qbaYOXdh7NaVwQ6mwhtzvVjlh3qflzh6OG/PxhC6g6xhsMj+akxrDkJOvL2SEjhEdTkGOkHHIc8O+URtsfrHz5whNs4nCRu1cI1JhlIRhPMAY7pzUZRiVjKRunbzrA9vOR9Yonlpzgjl8EFxjA/W7Yj0nCPNx2mR7lzzxxfg6ITaCOtpI+vZmlzpAjOO7wU3lucHun2FCqFh9EjeSMPatDHFeDTm/Ug7SJOrH62rPLXfFK1Rsx2XSPopStaiB2R2t83RxjHkuuMInLLJLyJWzS5o26+Whw6oNcMDgXAyCQROC66zaSoVabnU3w66eyabA4GNbmjLeuMoWsi0vqOYCHU2jKBIJkCeWaX0jWYb3Vfu5aRuBIiRjhwTtU6oVNNXZT6Vt4qVH1AexSApN+6GkD/T4qja6QB/hpM73BxVu6z020qjIMkDEGQ67jkcjz5JKzWC9iKb3THpsbkI1ldeNxrg5MilYvTeXQBm8mBtL3j3Njmu/0lYxZqVne0f2DxeO0VP7Q8zC5OjoV5dLKJEXYDqjCBBkzhiDuhWelBaBSe402tYG9praznCAZkMIhGXPYWPHc9BY4nIlTa07VzfRa2mpZ2OdBMXQMTg03cccTgugpicIB3R81BrksnwA8g7T3A3usul0gOHZbdGBBAwVLpnQjqrqcNF1j7zhiL2GAwyxXUCmTrjkT71O5Go+CySuwNuqOQtehzccBSMkEefhjxBSFkstrYBfpU3xlIaYjI4jBd85mSgbPrPyR1jRtpep5lpmyVqlRzhTAvgXgWziDBiDhg1qsA+2OYGOqgtAAuuoteIAiO07FdybM3cgOsgVE1VE2m3Z5/V0RaCcOrIwj93d1eqDAWLvvJxsW0+wurKgWWc4HAkjuU20GjWOEH3jFTZWj1VvyoRiY/DPsKlbKUiL2AmPYD7YWPsg1HvkeMKRrt1GeLXLYeTg27I2zPJC2GgbaAOYn63hQFPtAXCTsjCPvAR4poF+c4bNXjkpNYNcc3ZcELDRjKQGYjdIjvAW202gyS3m5vgi9kZXVu4DmGccvekbGSJB4GBDRvOXPJTY4HCBxF6O+FC4AMx3/ErKMHEEDmQe4QlbHSCiytzgcQD7VJlIZXuUjHktBw1vAP3nT4LbKg1kHZm7vvD3pHY6oJdDRN3DditWeo12TY+9e7xJhSv7GzvBAHtWPLgOzh94yP8AUSpMqg7mQM8OEj9MKFODjnwy7gT4oQtLgJN1o2ghw4xAI70Rjy70w7Xg4j2SoysvFkbQQI2/hnucfYoizsqYvbllGI5iEUZ/Mn/1lSFoE3YMxON4eMQhGwSoD5E3UCPwvA+HgkrTYm5jMcfgFZgEGcD+Y+IlRe9xw6sczA9i6ccqZz5I2ikq2EOz93uSFp0ODqkrofJbsyWjdIw4QECo0RAM8JXXF32OWSa7nH2jQog4kHcPaEozQpb5p75XamgNQQKlBVXBJqzlBYnj0yOEe9ENOoRddUcWnCMMtmAV5Us6gLMmEorbDSdSwp9kbst+CvLHbXHB4BO3JBbRU7m5B0zKy0baTkDHf8UenaN/HGI71TsMfXzR21oy9/thI4lEy2faJ+veEI2kN188PilmVJGOHigV7e5hutYTOsYDvxQoLZbMqhwknxHuKE/OB7Peq6kHEgl53i9I8BinrwAxdHHD2rGDNI2Hw+KxV1TSrAYvExskjkVixuChZZHETenfkPBFpWEzeB7jhzkYohMGJd3lHY0a7sePiVmzJA/JWek+ObRziAmKNKmcnBxG/ELTnMy7Hd8EMPE4Hub7yEAjTWDbHefYmGPOQx5E+JKrbz58+Bvj3KbbvpOae5BoKY66udsfl9malQtRdk5p5Ge7ApFlRkxcvbCIj2o7KjtQa3iJ96RodB31RmSBvLSPapU64IweHfdA+KD120Bx3Ej4qBqf5Ub+z4TmkHC1raGxicfujxOCZs1oLhhfjg0jvAQGukec7gGgeKmxg2uHEkexK6CrsaNM7CdowHiIKy6Bk0t/Fh7UrTZTa7NoJ34mPaivqMPqzwlTkViY62wbjqc7wLwPiEd1WRradrQ3/wBgUqHB2HVnmYB5glSoikMLoB2N7XiAoySLRbJUQTN6YG0gkngGo1K0DVTJ4yPBzUGtSBydU4CQPGFpllbmS/iT8CsmvJmmGc+qddwbA0e+SpPPZI626NZuwe/NVtpt93s06bnf4nT4CZPNQpaQqHB1IHvb7ZXRGLfJzykk6C0aNFhJBfUMRmQ39WvkjUnEiA27uKI2u4jCm0cTPuCXdWqH0mcgPerRbIySNkgEjCdYmYWnNnKOSWqUwPSJO74qXWYReKqmSfBp7d8oL2lEddAkYnuQb4OqFRMmzLv0VmO367lhM4CfBE6rCclmzIGTvjkohkY3jyQ31YO7gpU2kmbwjZCxuAjLRqjnB9x9yZZUcRAA4z8UpWqgYXZ3yfctNteq4OZKwbHG16TMHPE7JveAWqttpv8ANk7y0+8JJ1K+ZugcpCZDGtGPgEtBshO4LEUVW/RCxGxaKupamNwJM81nljD6E9yxYjqjbO6CtqT6N3kD71u8dePh74WLFNlESbuZ7EQMPqtHisWJGx1EMLO53pxwA+CwWN32jyRrmFpYpyk0UjFMIwVMgeZgn2LZbU9cdwPuWLErkPqbLHjznmN0D2KLW0znJI24rFiHdAfDJ9QwQYCZps2GOH8lpYpSbotFcmnvO08jCFVrVgOyBxOPhgsWKLdMslaN061c5tZO4kIg605vDfuge8LFi23PYKja5YKpbQye057uQ8YVPatK1ZJm6NgJMd5KxYvSxQSVnm5Jyboe0aX12BxcXNMECTltxKJbiykLoF5+zUOO1bWIRd5HHwgyVY1Lyyvq131WimYDZnDCdxnMI1Ox3fSKxYqvh8EFyuRuz0i7CQgWwXX3cCtrFov4gyXw2CbaY9EIde0l2axYqUSshRoE5Kwp2cgYlYsU5SZSEUV1YBroLz4qYtQya6Tw+K2sTrlCPuOUGl+ceIW7Symwb+axYkXcd9hK/uHj8VtYsVKEP//Z"}}/>
     </View>
        <View style={styles.btn} >
        
        <Text style={styles.btnNO} >Sort</Text> 
         <Text style={styles.btnNO}>Filter</Text>
          <Text style={styles.btnNO}> Duration</Text>
           <Text style={styles.btnNO}>Flight</Text>
           
        </View>
        <View style={styles.hr}>
        <Text style={styles.textOn}>ALL PACKAGES ({newData.length})</Text>
        <Text style={styles.text}>ALL-INCLUSIVE (5)</Text>
        <Text style={styles.text}>HONEYMOON (8)</Text>
        <Text style={styles.text}> </Text>
        </View>
        <ScrollView style={styles.scroll}>

            <Cards ondata={getDataOne} />
           
      

      
          
        </ScrollView>
        
    </View>
  )
}

const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
container:{
    flexDirection: 'column',  
    justifyContent: 'center',  
    alignItems: 'center', 
    
},
goa:{
  fontWeight:"900",
  color:"white",
  fontSize:30,
  textAlign:"center",
},
img:{
    width:deviceWidth,
    height:200,
},
wraptxt:{
  justifyContent:"center",
  alignItems:"center",

},
site:{
  color:"white",
  fontSize:16,
  fontWeight:"400"
},
siteOne:{
  color:"white",
  fontSize:12
},
btnNO:{
  borderWidth:.4,
  textAlign:"center",
  width:70,
  padding:3,
  borderRadius:7,
},
scroll:{
  marginBottom:140,
  padding:3,
},
btn:{
    flexDirection:"row",

    width:deviceWidth,
    justifyContent:"space-between",
    padding:5
   
},
over:{
    position:"absolute",
    zIndex:1,
   left:90,
   top:70,
   textAlign:"center",
  
    

},
text:{
    color:"white",
},
textOn:{
color:"#145DCA",
},
hr:{
    width:deviceWidth,
    height:35,
    borderWidth:2,
  flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"black",
alignItems:"center"
}
})

export default Booking