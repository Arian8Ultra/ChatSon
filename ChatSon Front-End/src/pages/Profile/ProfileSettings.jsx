import React from 'react'
import CustomCard from '../../components/CustomCard'
import LinkButton from '../../components/LinkButton'
import { Exported_RSA_Key_Gen, RSA_Key_Gen } from '../../Functions/Security'
function ProfileSettings() {
  const[pukey,setPukey]=React.useState('')
  const[prkey,setPrkey]=React.useState('')
  async function  handleKey_Gen(){
    Exported_RSA_Key_Gen(setPrkey,setPukey)
  }
  return (
    <CustomCard>
      <LinkButton text={'Key Gen'} fun={handleKey_Gen}/>
    </CustomCard>
  )
}

export default ProfileSettings