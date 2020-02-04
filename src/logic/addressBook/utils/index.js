// @flow
import { useSelector } from 'react-redux'
import type { AddressBook, AddressBookProps } from '~/logic/addressBook/model/addressBook'
import {
  loadFrom3Box,
  loadFromStorage,
  saveTo3Box,
  saveToStorage,
} from '~/utils/storage'
import { getAddressBook } from '~/logic/addressBook/store/selectors'
import type { Owner } from '~/routes/safe/store/models/owner'

const ADDRESS_BOOK_STORAGE_KEY = 'ADDRESS_BOOK_STORAGE_KEY'

export const getAddressBookFromStorage = async (use3BoxStorage?: boolean): Promise<AddressBookProps | []> => {
  const loadHandler = use3BoxStorage ? loadFrom3Box : loadFromStorage
  const data = await loadHandler(ADDRESS_BOOK_STORAGE_KEY)

  return data || []
}

export const saveAddressBook = async (addressBook: AddressBook, use3BoxStorage?: boolean) => {
  try {
    const saveHandler = use3BoxStorage ? saveTo3Box : saveToStorage
    await saveHandler(ADDRESS_BOOK_STORAGE_KEY, addressBook.toJS())
  } catch (err) {
    console.error('Error storing addressBook in localstorage', err)
  }
}

export const getAddressesListFromAdbk = (addressBook: AddressBook) => Array.from(addressBook).map((entry) => entry.address)

const getNameFromAdbk = (addressBook: AddressBook, userAddress: string): string | null => {
  const entry = addressBook.find((addressBookItem) => addressBookItem.address === userAddress)
  if (entry) {
    return entry.name
  }
  return null
}

export const getNameFromAddressBook = (userAddress: string): string | null => {
  if (!userAddress) {
    return null
  }
  const addressBook = useSelector(getAddressBook)
  return getNameFromAdbk(addressBook, userAddress)
}


export const getOwnersWithNameFromAddressBook = (addressBook: AddressBook, ownerList: List<Owner>) => {
  if (!ownerList || !addressBook || !ownerList.size || !addressBook.size) {
    return []
  }
  const ownersListWithAdbkNames = ownerList.map((owner) => {
    const ownerName = getNameFromAdbk(addressBook, owner.address)
    return {
      address: owner.address,
      name: ownerName || owner.name,
    }
  })
  return ownersListWithAdbkNames
}
