const AWS = require('aws-sdk')

const isJson = data => {
  try {
    JSON.parse(data)
  } catch (error) {
    return false
  }
  return true
}

const getSecrets = async secretName => {
  let secrets = {}

  try {
    const client = new AWS.SecretsManager({
      region: 'sa-east-1',
    })

    const response = await client
      .getSecretValue({ SecretId: secretName })
      .promise()

    if ('SecretString' in response) {
      secrets = response.SecretString
    } else {
      const buffer = Buffer.from(response.SecretBinary, 'base64')
      secrets = buffer.toString('ascii')
    }

    return isJson(secrets) ? JSON.parse(secrets) : secrets
  } catch (error) {
    console.error(`Serverless - SSM: ${error}`)
    return error
  }
}

const getAllSecrets = async args => {
  const { stage } = args.options

  
  const ambiente = await getSecrets(`${stage}/global/ambiente`)
  

  return {
    ambiente,
  }
}

module.exports.getAllSecrets = getAllSecrets
