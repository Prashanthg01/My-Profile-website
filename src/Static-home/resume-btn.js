

function ResumeDownloadButton() {
  const handleDownload = async () => {
    const fileUrl = '/Documents/Prashanth_Resume_updated.pdf';

    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const blobUrl = URL.createObjectURL(blob);

      // Create a hidden link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Prashanth_Resume.pdf';

      // Dispatch a click event on the link element to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the temporary URL
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.log('Error occurred while downloading the file:', error);
    }
  };

  return (
    <button className='button-d1' onClick={handleDownload}>Download PDF</button>
  );
}

export default ResumeDownloadButton;
