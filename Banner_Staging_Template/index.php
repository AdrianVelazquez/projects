<?php
    // concept
    // banner
        // name
        // url
        // file size
        // date modified
        // backup image


    $json = file_get_contents("manifest.json");
    $json_data = json_decode($json, true);

    
    // set timezone
    date_default_timezone_set('America/New_York');


    // get the file type
    function roundFileSize($zip)
    {
        $fSize = filesize($zip);
        $tempSize = round($fSize/1000, 2);
        return $tempSize . "KB";
    }

    function formatFileSize($size) {
        $fSize = $size;
        $tempSize = round($fSize/1000, 2);
        return $tempSize;
    }

    // formats the fileName
    function formatFileName($fileName)
    {
        $tempName = basename($fileName);
        return($tempName);
    }

    // converts the date from utc time to mm/dd/yyyy format
    function formatDate($date) {
        return date( "m/d/Y", $date );
    }
    
    function formatDisplayName($thename)
    {
        $inputName = explode ("_", $thename);
        foreach($inputName as $key => $name) {
           $inputName[$key]  = ucwords($name);
        }
        $prettyName = implode (" ", $inputName);
        
        return $prettyName;
    }

    // pulls out the index html file from the given folder
    function getIndexFile($dir) {
        $files = getFileList($dir);
        $indexFile;
        foreach($files as $file) {
            if ($file['type'] == "text/html") {
                $indexFile = $file['name'];
                continue;
            }
        }

        return $indexFile;
    }


    // get the banners folder
    $concepts = $json_data[concepts];
    

    function getHtmlFile ($banner_path) {
        if (file_exists($banner_path)) {
            foreach (glob($banner_path . "/*.html") as $filename) {
                return $filename;
            }
        }
    }



    // grab the project and client names
    $prettyClientName = formatDisplayName($json_data[client]);
    $prettyProjectName = formatDisplayName($json_data[project]);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Droga5 Staging Area | <?php echo $prettyClientName; ?></title>
    
    <link rel="stylesheet" href="css/style.css">

</head>

<body>
     <header class="header">
        <div class="header-logo"></div>
        <h1 class="header-clientname"><?php echo $prettyClientName;?></h1>
    </header>

    <div class="wrapper">   
        
        <h1 class="project-name"><?php echo $prettyProjectName;?></h1>
        
        <section class="content container">
            <!-- Table header row -->
            <?php
                foreach($concepts as $concept) {
                    // grab each concept
                    $concept_name = $concept[concept_name];
                    // grab the folder containing the banners
                    $base_url = $concept[concept_base_url];

            ?>
                 <div class="tableholder table">
                    <table title="" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr class="concept-title">
                            <th colspan="5"><?php echo $concept_name; ?></th>
                        </tr>
                        <tr>
                            <th>Preview</th>
                            <th>Filename</th>
                            <th>File Size</th>
                            <th>Date Modified</th>
                            <th>Backup</th>
                        </tr>
                    </thead>
                    
                    <?php
                        $banners = $concept[banners];
                        if (file_exists($base_url)) {

                            foreach ($banners as $key => $banner) {
                                // gets all the banner info
                                $bannerName = formatDisplayName($banner[banner_name]);
                                $bannerZipFile = $base_url . $banner[banner_base_name]. ".zip";
                                $bannerHtmlFile = getHtmlFile($base_url . $banner[banner_base_name]);
                                $bannerFileSize = formatFileSize( filesize($bannerZipFile) );
                                $bannerDateModified = formatDate( filemtime($bannerZipFile) );
                                $bannerBackup = $base_url . $banner[banner_base_name]. ".jpg";
                        ?>
                                <tr>
                                    <!-- thumbnail -->
                                    <td class="backup-thumbnail"><a href="<?php echo $bannerHtmlFile; ?>" target="_blank"><img src="<?php echo $bannerBackup ?>" alt=""></a></td>
                                    <!-- filename -->
                                    <td><a href="<?php echo $bannerHtmlFile; ?>" target="_blank"><?php echo $bannerName; ?></a></td>
                                    <!-- file size -->
                                    <td 
                                    <?php
                                        // show an alert if the banner is over 150kb
                                        if ($bannerFileSize > 150) {
                                            echo "class='file-size-alert'>";
                                        } else {
                                            echo ">";
                                        }
                                        echo $bannerFileSize . "KB";
                                    ?>
                                    </td>
                                    <!-- date -->
                                    <td><?php echo $bannerDateModified; ?></td>
                                    <!-- backup image -->
                                    <td><a href="<?php echo $bannerBackup ?>" target="_blank">backup image</a></td>
                                </tr>
                                
                        <?php } 
                    }
                         ?>
                    </table>
                </div>
            <?php } ?>
                    

        </section>


        <!-- <div class="container">
            <div><h4><a href="#">Download zipped files</a></h4></div>
        </div> -->

    </div>

    <footer class="footer">
        <div class="footer-logo"></div>
        <div class="footer-caption">&copy;2017 Droga5. All Rights Reserved.</div>
    </footer>
</body>

</html>