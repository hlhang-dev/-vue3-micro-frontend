export default class FileUtils {
  getBase64File(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        console.log('FileUtils getBase64File reader',reader)
      }


      reader.onerror = error => reject(error)
    })
  }
}
