import { DataStore } from 'aws-amplify'
import { useEffect } from 'react'
import { Rental } from './models'
import { RentalCollection } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react' // or 'aws-amplify-react-native';

function App () {
  useEffect(() => {
    const pullData = async () => {
      const rentals = await DataStore.query(Rental)
      console.log(rentals)
    }
    pullData()
  }, [])
  return (
    <RentalCollection type='grid' />
  )
}

export default withAuthenticator(App)
