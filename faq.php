<?php
require 'partials/tools.php';

$db = db();
$query = $db->query('SELECT * FROM faq');
$faq = $query->fetchAll();
?>

<html lang="fr">
<?php require 'partials/head-asset.html' ; ?>
<body>
<?php require 'partials/header.html' ; ?>
<div data-name="faq" id="title" class="zIndex-5">
    <h1>
        FAQ
    </h1>
</div>
<div id="core">
    <div class="pics url-2 zIndex-1"></div>
    <div class="bgc grey"></div>
        <section>
            <div class="hoofdband zIndex-1">
                Foire aux questions
            </div>
                <article class="grey border">
                    <?php foreach ($faq as $Q_A):?>
                    <div class="article">
                            <div class="question"><?php echo $Q_A['question']?></div>
                            <div class="answer"><?php echo $Q_A['answer']?></div>
                    </div>
                    <?php endforeach; ?>
                </article>
        </section>
</div>
<?php require 'partials/Gmaps.html' ; ?>
<?php require 'partials/footer.html' ; ?>
</body>
<script type="text/javascript">
    <?php require 'script/script.js' ; ?>
</script>
</html>
