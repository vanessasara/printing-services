// Test script to verify Sanity connection
import { client, projectId, dataset } from './sanity.client'

export async function testSanityConnection() {
  try {
    console.log('Testing Sanity connection...')
    console.log('Project ID:', projectId)
    console.log('Dataset:', dataset)

    // Test a simple query
    const result = await client.fetch('*[_type == "product"][0...1]')
    console.log('Connection successful!')
    console.log('Query result:', result)
    return true
  } catch (error) {
    console.error('Connection failed:', error)
    return false
  }
}
