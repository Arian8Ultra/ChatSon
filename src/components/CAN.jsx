import { Box } from '@mui/system';
import React from 'react'
import useAbilityStore from '../ZuStore/AbilityStore';

export default function CAN({component, permissionNeeded,display}) {
    const zuAbilities = useAbilityStore((state) => state.abilities);
    const abilities = zuAbilities != null ? zuAbilities : [];

    
    const handlePermissionVisibility= () =>{
        if(abilities.includes(permissionNeeded) || permissionNeeded==null || abilities.includes('admin')){
            return 'visible'
        }
        return 'hidden'
    }
    const handlePermissionSize= () =>{
        if(abilities.includes(permissionNeeded)|| permissionNeeded==null || abilities.includes('admin')){
            return {}
        }
        return 0
    }
    const handlePermissionDisplay= () =>{
        if(abilities.includes(permissionNeeded)|| permissionNeeded==null || abilities.includes('admin')){
            return {}
        }
        return 'none'
    }

  return (
    <Box component="div" visibility={handlePermissionVisibility()}   margin={0} sx={{ width:handlePermissionSize(),height:handlePermissionSize(), minWidth:handlePermissionSize(),minHeight:handlePermissionSize(),fontSize:handlePermissionSize(),display: { xs: handlePermissionDisplay()}}}>
        {component}
    </Box>
  )
}
