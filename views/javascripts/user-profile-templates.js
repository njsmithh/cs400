  <h1>Logged in as {{display_name}}</h1>
  <div class="media">
    <div class="pull-left">
      <img class="media-object" width="150" src="{{images.0.url}}" />
    </div>
    <div class="media-body">
      <dl class="dl-horizontal">
        <dt>Display name</dt><dd class="clearfix">{{display_name}}</dd>
        <dt>Id</dt><dd>{{id}}</dd>
        <dt>Email</dt><dd>{{email}}</dd>
        <dt>Spotify URI</dt><dd><a href="{{external_urls.spotify}}">{{external_urls.spotify}}</a></dd>
        <dt>Link</dt><dd><a href="{{href}}">{{href}}</a></dd>
        <dt>Profile Image</dt><dd class="clearfix"><a href="{{images.0.url}}">{{images.0.url}}</a></dd>
        <dt>Country</dt><dd>{{country}}</dd>
      </dl>
    </div>
  </div>