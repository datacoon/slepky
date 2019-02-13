---
layout: page

ref: form
lang: ru

title: Заявка на базу данных по НКО
---

<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <form action="https://formspree.io/apicrafter@infoculture.ru" method="POST" data-parsley-validate="">
      <div class="form-group row">
        <div class="col-12 col-sm-6 mb-3 mb-sm-0">
        <label for="formName">Ваше имя</label>
        <input type="text" name="full_name" class="form-control" id="formName" placeholder="Введите Ваше имя">
        </div>
        <div class="col-12 col-sm-6 mb-3 mb-sm-0">
          <label for="formEmail">E-mail*</label>
          <input type="email" name="_replyto" class="form-control" id="formEmail" placeholder="Введите Ваш E-mail" required="">
        </div>
      </div>
      <div class="form-group">
        <label for="formPhone">Телефон</label>
        <input type="phone" name="phone" class="form-control" id="formPhone" placeholder="Введите номер Вашего телефона">
      </div>
      <div class="form-group">
        <label for="formOrganization">Организация</label>
        <input type="text" name="full_name" class="form-control" id="formOrganization" placeholder="Введите название Вашей Организации">
      </div>
      <div class="form-group">
        <label for="formMessage">Располагаемые базы данных*</label>
        <textarea name="message" class="form-control" id="formMessage" rows="3" placeholder="Введите краткое описание с основными параметрами" required=""></textarea>
      </div>
      <div class="form-group">
        <p class="warn">Отправляя заявку, я соглашаюсь на обработку персональных данных.</p>
      </div>
      <div class="form-group text-center">
        <input class="btn btn-lg btn-primary" type="submit" value="Отправить заявку">
      </div>

      <input type="hidden" name="_subject" value="Заявка с сайта API Crafter (НКО)">
      <input type="hidden" name="_next" value="http://apicrafter.ru/thanks">
      <input type="hidden" name="_language" value="ru" />
    </form>
  </div>
</div>