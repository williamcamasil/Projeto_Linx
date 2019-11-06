using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using backend.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class UploadRepository {
        public string Upload (IFormFile imagem, string urlFolder) {

            var incremento = DateTime.Now.ToString ("yyyyMMdd") + "_" + DateTime.Now.ToLongTimeString ().Replace (":", "") + "_";
            var folderName = Path.Combine ("Resources", "Images", urlFolder);
            var pathToSave = Path.Combine (Directory.GetCurrentDirectory (), folderName);

            if (imagem.Length > 0) {
                var fileName = ContentDispositionHeaderValue.Parse (imagem.ContentDisposition).FileName.Trim ('"');
                var fileNameIncrement = incremento + fileName;
                var fullPath = Path.Combine (pathToSave, fileNameIncrement);
                var dbPath = Path.Combine (folderName, fileNameIncrement);

                using (var stream = new FileStream (fullPath, FileMode.Create)) {
                    imagem.CopyTo (stream);
                }
                return fullPath;
            } else {
                return "Erro ao enviar a imagem";
            }
        }

        // private static Random random = new Random ();
        // public static string RandomString (int length) {
        //     const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        //     return new string (Enumerable.Repeat (chars, length).Select (s => s[random.Next (s.Length)]).ToArray ());
        // }
    }
}