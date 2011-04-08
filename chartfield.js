Drupal.behaviors.chart = function(context) {
  for (var key in Drupal.settings.charts){
    Drupal.settings.charts[key] = new Highcharts.Chart(Drupal.settings.charts[key]);
  }
};

function apply_series(cid,sid,did){
    Drupal.settings.charts[cid].series[sid].setData(Drupal.settings.series[cid][sid][did].data,false);
    Drupal.settings.charts[cid].xAxis[0].setCategories(Drupal.settings.series[cid][sid][did].categories);
}
