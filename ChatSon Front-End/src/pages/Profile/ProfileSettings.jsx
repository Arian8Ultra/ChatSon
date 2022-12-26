import React from 'react'
import CustomCard from '../../components/CustomCard'
import LinkButton from '../../components/LinkButton'
import { RSA_Key_Gen } from '../../Functions/Security'
function ProfileSettings() {
  const[pukey,setPukey]=React.useState('')
  const[prkey,setPrkey]=React.useState('')
  async function  handleKey_Gen(){
    let keyPair = RSA_Key_Gen(setPrkey,setPukey)
    console.log(keyPair);
  }
  return (
    <CustomCard>
      <LinkButton text={'Key Gen'} fun={handleKey_Gen}/>
      {String(pukey)}{String(prkey)}
    </CustomCard>
  )
}

export default ProfileSettings