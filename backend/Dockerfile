FROM python:3.12

WORKDIR /app

COPY ./backend/requirements.txt ./

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

COPY ./backend /app

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
